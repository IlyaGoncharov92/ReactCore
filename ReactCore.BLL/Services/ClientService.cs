using System.Collections.Generic;
using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.Client;

namespace ReactCore.BLL.Services
{
    public class ClientService : IClientService
    {
        private IClientRpository ClientRepository { get; }

        public ClientService(IClientRpository clientRepository)
        {
            ClientRepository = clientRepository;
        }

        public List<ClientDetails> List()
        {
            return ClientRepository.List();
        }
    }
}
