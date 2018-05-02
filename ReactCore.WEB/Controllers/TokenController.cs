using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.Domain;
using ReactCore.WEB.Models;
using ReactCore.WEB.Providers;

namespace ReactCore.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/token")]
    public class TokenController : Controller
    {
        private OAuthProvider OAuthProvider { get; }

        public TokenController(OAuthProvider oAuthProvider)
        {
            OAuthProvider = oAuthProvider;
        }

        [HttpPost]
        public OperationResult Token([FromBody] JWTRequest parameters)
        {
            if (parameters == null)
            {
                return new OperationResult
                {
                    Success = false,
                    Message = "null of parameters"
                };
            }

            switch (parameters.grant_type)
            {
                case "password":
                {
                    return OAuthProvider.DoPassword(parameters);
                }
                case "refresh_token":
                {
                    return OAuthProvider.DoRefreshToken(parameters);
                }
                default:
                    return new OperationResult
                    {
                        Success = false,
                        Message = "bad request"
                    };
            }
        }
    }
}
