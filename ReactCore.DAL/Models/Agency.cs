using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCore.DAL.Models
{
    public class Agency
    {
        [Key]
        [ForeignKey(nameof(User))]
        public long UserId { get; set; }

        public string ContactName { get; set; }
        public string Location { get; set; }
        public int Bulk { get; set; }
        public int Individual { get; set; }
        public int Pickup { get; set; }
        
        public User User { get; set; }
        public ICollection<Request> Requests { get; set; }
    }
}
