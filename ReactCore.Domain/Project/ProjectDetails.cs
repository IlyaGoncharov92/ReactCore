using System.Collections.Generic;
using ReactCore.Domain.Client;
using ReactCore.Domain.User;

namespace ReactCore.Domain.Project
{
    public class ProjectDetails : DomainBase
    {
        public ProjectDetails()
        {
            Users = new List<UserDisplay>();
        }

        public string Name { get; set; }
        public string Color { get; set; }
        public long ClientId { get; set; }
        public ClientDisplay Client { get; set; }
        public List<UserDisplay> Users { get; set; }
    }
}
