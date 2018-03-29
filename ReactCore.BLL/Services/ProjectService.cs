using System.Collections.Generic;
using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.Project;

namespace ReactCore.BLL.Services
{
    public class ProjectService : IProjectService
    {
        private IProjectRepository ProjectRepository { get; }

        public ProjectService(IProjectRepository projectRepository)
        {
            ProjectRepository = projectRepository;
        }

        public List<ProjectDetails> List()
        {
            return ProjectRepository.List();
        }
    }
}
