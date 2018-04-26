using System.ComponentModel.DataAnnotations.Schema;
using ReactCore.Domain;

namespace ReactCore.DAL.Models
{
    public class Order : BaseRequest
    {
        [ForeignKey(nameof(Volunteer))]
        public long? VolunteerId { get; set; }
        public Volunteer Volunteer { get; set; }

        public OrderStatus Status { get; set; }
    }
}
