using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.RefreshToken;

namespace ReactCore.DAL.Mapping
{
    public class RefreshTokenProfile : Profile
    {
        public RefreshTokenProfile()
        {
            CreateMap<RefreshToken, RefreshTokenDetails>();
            CreateMap<RefreshTokenDetails, RefreshToken>();
        }
    }
}
