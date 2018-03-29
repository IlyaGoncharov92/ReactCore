using System.Collections.Generic;

namespace ReactCore.DAL.Models
{
    public class User : EntityBase
    {
        public User()
        {
            UserProjects = new List<UserProjects>();
        }

        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<UserProjects> UserProjects { get; set; }
    }
}
