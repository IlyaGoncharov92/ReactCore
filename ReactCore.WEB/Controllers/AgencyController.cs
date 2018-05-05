using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.BLL.Abstract.Services;
using ReactCore.Domain.User;

namespace ReactCore.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/agencies")]
    public class AgencyController : Controller
    {
        private IAgencyService AgencyService { get; }

        public AgencyController(IAgencyService agencyService)
        {
            AgencyService = agencyService;
        }

        [Authorize]
        [Route("list")]
        public List<UserDetails> List()
        {
            return AgencyService.List();
        }
    }
}