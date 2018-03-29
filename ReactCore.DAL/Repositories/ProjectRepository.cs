using System.Collections.Generic;
using System.Linq;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.Project;

namespace ReactCore.DAL.Repositories
{
    public class ProjectRepository : Base, IProjectRepository
    {
        public ProjectRepository(ReactCoreContext context) : base(context)
        {
        }

        public List<ProjectDetails> List()
        {
            //var result = Context.Projects.Include(x => x.Client);
            return Context.Projects.ProjectTo<ProjectDetails>().ToList();
        }
    }
}
