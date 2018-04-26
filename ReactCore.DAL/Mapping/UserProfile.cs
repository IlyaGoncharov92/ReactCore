using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.Agency;
using ReactCore.Domain.AgencyManager;
using ReactCore.Domain.User;
using ReactCore.Domain.Volunteer;

namespace ReactCore.DAL.Mapping
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDetails>();
            CreateMap<UserDetails, User>();

            CreateMap<User, UserDisplay>();
            CreateMap<UserDisplay, User>();
            

            CreateMap<Agency, AgencyDetails>();
            CreateMap<AgencyDetails, Agency>();

            CreateMap<Agency, AgencyDisplay>();
            CreateMap<AgencyDisplay, Agency>();


            CreateMap<AgencyManager, AgencyManagerDetails>();
            CreateMap<AgencyManagerDetails, AgencyManager>();

            CreateMap<AgencyManager, AgencyManagerDisplay>();
            CreateMap<AgencyManagerDisplay, AgencyManager>();


            CreateMap<Volunteer, VolunteerDetails>();
            CreateMap<VolunteerDetails, Volunteer>();

            CreateMap<Volunteer, VolunteerDisplay>();
            CreateMap<VolunteerDisplay, Volunteer>();
        }
    }
}
