using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.Child;

namespace ReactCore.DAL.Mapping
{
    public class ChildProfile : Profile
    {
        public ChildProfile()
        {
            CreateMap<Child, ChildDetails>();
            CreateMap<ChildDetails, Child>();

            CreateMap<Child, ChildDisplay>();
            CreateMap<ChildDisplay, Child>();
        }
    }
}
