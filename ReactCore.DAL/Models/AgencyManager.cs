using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCore.DAL.Models
{
    public class AgencyManager
    {
        [Key]
        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
        public User User { get; set; }

        public long AgencyId { get; set; }
    }
}
