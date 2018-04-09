using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.BLL.Abstract.Services;
using ReactCore.Domain.Project;

namespace ReactCore.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/projects")]
    public class ProjectsController : Controller
    {
        private IProjectService ProjectService { get; }

        public ProjectsController(IProjectService projectService)
        {
            ProjectService = projectService;
        }

        [HttpGet]
        [Route("list")]
        public List<ProjectDetails> List()
        {
            System.Threading.Thread.Sleep(2000);
            return ProjectService.List();
        }
    }
}
