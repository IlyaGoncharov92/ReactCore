using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.Client;

namespace ReactCore.DAL.Mapping
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<Client, ClientDetails>();
            CreateMap<ClientDetails, Client>();

            CreateMap<Client, ClientDisplay>();
            CreateMap<ClientDisplay, Client>();
        }
    }
}
