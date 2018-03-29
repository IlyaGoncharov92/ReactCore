using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.BLL.Abstract.Services;
using ReactCore.Domain.Client;

namespace ReactCore.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/Clients")]
    public class ClientsController : Controller
    {
        private IClientService ClientService { get; }

        public ClientsController(IClientService clientService)
        {
            ClientService = clientService;
        }

        [HttpGet]
        [Route("list")]
        public List<ClientDetails> List()
        {
            return ClientService.List();
        }
    }
}