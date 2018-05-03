using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ReactCore.BLL.Abstract.Services;
using ReactCore.Common.AppSettings;
using ReactCore.DAL.Repositories;
using ReactCore.Domain;
using ReactCore.Domain.RefreshToken;
using ReactCore.Domain.User;
using ReactCore.WEB.Models;

namespace ReactCore.WEB.Providers
{
    public class OAuthProvider
    {
        private IAppConfigurations Config { get; }
        private IHttpContextAccessor HttpContextAccessor { get; }
        private IUserService UserService { get; }
        private IRefreshTokenService RefreshTokenService { get; }

        private static TimeSpan AccessTokenExpires => TimeSpan.FromSeconds(15);
        private static DateTime RefreshTokenExpires => DateTime.UtcNow.AddMinutes(2);

        public OAuthProvider(IAppConfigurations config, IHttpContextAccessor httpContextAccessor, IUserService userService, IRefreshTokenService refreshTokenService)
        {
            Config = config;
            HttpContextAccessor = httpContextAccessor;
            UserService = userService;
            RefreshTokenService = refreshTokenService;
        }

        public OperationResult DoPassword(JWTRequest parameters)
        {
            var user = UserService.GetByEmail(parameters.username);

            if (user == null || user.Password != parameters.password)
            {
                return new OperationResult
                {
                    Success = false,
                    Message = "invalid user infomation"
                };
            }

            var refreshToken = new RefreshTokenDetails
            {
                Id = Guid.NewGuid().ToString("n"),
                ExpiresUtc = RefreshTokenExpires
            };

            RefreshTokenService.Add(refreshToken);

            return new OperationResult<JWTResponse>
            {
                Object = GetJwt(user, refreshToken.Id)
            };
        }

        public OperationResult DoRefreshToken(JWTRequest parameters)
        {
            var token = RefreshTokenService.GetById(parameters.refresh_token);

            var user = UserService.GetByEmail(parameters.username);

            if (token == null || user == null)
            {
                return new OperationResult
                {
                    Success = false,
                    Message = "can not refresh token",
                };
            }
            else
            {
                return new OperationResult<JWTResponse>
                {
                    Object = GetJwt(user, parameters.refresh_token)
                };
            }
        }

        private JWTResponse GetJwt(UserDetails user, string refreshToken)
        {
            var now = DateTime.UtcNow;

            var claims = CreateClaims(user);

            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Config.Jwt.Secret));

            var jwt = new JwtSecurityToken(
                issuer: Config.Jwt.Issuer,
                audience: Config.Jwt.Audience,
                claims: claims,
                notBefore: now,
                expires: now.Add(AccessTokenExpires),
                signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JWTResponse
            {
                access_token = encodedJwt,
                expires_in = (int)AccessTokenExpires.TotalSeconds,
                refresh_token = refreshToken,
                username = user.Email
            };
        }

        private static List<Claim> CreateClaims(UserDetails user)
        {
            var claims = new List<Claim>
            {
                new Claim("UserId", user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };

            return claims;
        }
    }
}
