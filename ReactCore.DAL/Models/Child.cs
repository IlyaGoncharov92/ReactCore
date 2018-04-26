using System.ComponentModel.DataAnnotations.Schema;
using ReactCore.Domain;

namespace ReactCore.DAL.Models
{
    public class Child : EntityBase
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public GenderType Gender { get; set; }

        [ForeignKey(nameof(Request))]
        public long RequestId { get; set; }
        public Request Request { get; set; }

        [ForeignKey(nameof(Order))]
        public long? OrderId { get; set; }
        public Order Order { get; set; }
    }
}
