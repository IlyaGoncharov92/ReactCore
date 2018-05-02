using ReactCore.Domain.RefreshToken;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IRefreshTokenService
    {
        RefreshTokenDetails GetById(string id);
        void Add(RefreshTokenDetails token);
    }
}
