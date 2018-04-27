using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.BLL.Abstract.Services;
using ReactCore.Domain.User;

namespace ReactCore.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/volunteers")]
    public class VolunteerController : Controller
    {
        private IVolunteerService VolunteerService { get; }

        public VolunteerController(IVolunteerService volunteerService)
        {
            VolunteerService = volunteerService;
        }

        [Route("list")]
        public List<UserDetails> List()
        {
            return VolunteerService.List();
        }
    }
}