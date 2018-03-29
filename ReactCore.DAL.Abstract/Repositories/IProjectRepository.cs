using System.Collections.Generic;
using ReactCore.Domain.Project;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IProjectRepository
    {
        List<ProjectDetails> List();
    }
}
