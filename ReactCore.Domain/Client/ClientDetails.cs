using System.Collections.Generic;
using ReactCore.Domain.Project;

namespace ReactCore.Domain.Client
{
    public class ClientDetails : DomainBase
    {
        public ClientDetails()
        {
            Projects = new List<ProjectDisplay>();
        }

        public string Name { get; set; }
        public List<ProjectDisplay> Projects { get; set; }
    }
}
