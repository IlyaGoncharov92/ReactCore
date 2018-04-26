using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCore.DAL.Models
{
    public class Volunteer
    {
        [Key]
        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
        public User User { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}
