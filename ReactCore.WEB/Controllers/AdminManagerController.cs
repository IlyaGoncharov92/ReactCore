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
    [Route("api/adminManager")]
    public class AdminManagerController : Controller
    {
        private IAdminManagerService AdminManagerService { get; }

        public AdminManagerController(IAdminManagerService adminManagerService)
        {
            AdminManagerService = adminManagerService;
        }

        [Route("list")]
        public List<UserDetails> List()
        {
            return AdminManagerService.List();
        }
    }
}