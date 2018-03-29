using System.Collections.Generic;
using ReactCore.Domain.Client;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IClientRpository
    {
        List<ClientDetails> List();
    }
}
