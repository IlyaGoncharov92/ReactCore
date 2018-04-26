using AutoMapper;
using ReactCore.DAL.Mapping;

namespace ReactCore.Configuration
{
    public static class MappingConfig
    {
        public static void Register()
        {
            Mapper.Initialize(x =>
            {
                x.AddProfile<UserProfile>();
                x.AddProfile<RequestProfile>();
                x.AddProfile<ChildProfile>();
            });
        }
    }
}
