using System.Collections.Generic;
using ReactCore.Domain.Project;

namespace ReactCore.Domain.User
{
    public class UserDetails : DomainBase
    {
        public UserDetails()
        {
            Projects = new List<ProjectDisplay>();
        }

        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<ProjectDisplay> Projects { get; set; }
    }
}
