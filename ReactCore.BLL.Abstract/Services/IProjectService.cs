using System.Collections.Generic;
using ReactCore.Domain.Project;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IProjectService
    {
        List<ProjectDetails> List();
    }
}
