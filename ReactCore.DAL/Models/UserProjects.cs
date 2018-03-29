using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCore.DAL.Models
{
    public class UserProjects
    {
        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
        public User User { get; set; }

        [ForeignKey(nameof(Project))]
        public long ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
