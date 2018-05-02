using ReactCore.Domain.RefreshToken;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IRefreshTokenRepository
    {
        RefreshTokenDetails GetById(string id);
        void Add(RefreshTokenDetails token);
    }
}
