using System.Collections.Generic;

namespace ReactCore.DAL.Models
{
    public class Client : EntityBase
    {
        public Client()
        {
            Projects = new List<Project>();    
        }

        public string Name { get; set; }
        public List<Project> Projects { get; set; }
    }
}
