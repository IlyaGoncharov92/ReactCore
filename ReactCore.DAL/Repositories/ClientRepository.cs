using System.Collections.Generic;
using System.Linq;
using AutoMapper.QueryableExtensions;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.Client;

namespace ReactCore.DAL.Repositories
{
    public class ClientRepository : Base, IClientRpository
    {
        public ClientRepository(ReactCoreContext context) : base(context)
        {
        }

        public List<ClientDetails> List()
        {
            return Context.Clients.ProjectTo<ClientDetails>().ToList();
        }
    }
}
