using System.Collections.Generic;
using ReactCore.Domain.Client;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IClientService
    {
        List<ClientDetails> List();
    }
}
