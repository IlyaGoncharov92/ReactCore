using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ReactCore.DAL.Models
{
    public class Project : EntityBase
    {
        public Project()
        {
            UserProjects = new List<UserProjects>();
        }

        public string Name { get; set; }
        public string Color { get; set; }

        [ForeignKey(nameof(Client))]
        public long ClientId { get; set; }
        public Client Client { get; set; }
        public List<UserProjects> UserProjects { get; set; }
    }
}
