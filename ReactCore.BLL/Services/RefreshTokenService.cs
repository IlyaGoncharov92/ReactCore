using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.RefreshToken;

namespace ReactCore.BLL.Services
{
    public class RefreshTokenService : IRefreshTokenService
    {
        private IRefreshTokenRepository RefreshTokenRepository { get; }

        public RefreshTokenService(IRefreshTokenRepository refreshTokenRepository)
        {
            RefreshTokenRepository = refreshTokenRepository;
        }

        public RefreshTokenDetails GetById(string id)
        {
            return RefreshTokenRepository.GetById(id);
        }

        public void Add(RefreshTokenDetails token)
        {
            RefreshTokenRepository.Add(token);
        }
    }
}
