using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Mapping
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDetails, User>();
            CreateMap<User, UserDetails>();

            CreateMap<UserDisplay, User>();
            CreateMap<User, UserDisplay>();
        }
    }
}
