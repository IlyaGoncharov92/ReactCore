using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using ReactCore.Domain;

namespace ReactCore.DAL.Models
{
    public class User : EntityBase
    {
        public User()
        {

        }

        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public UserType Type { get; set; }
    }

    public class Agency : EntityBase
    {
        public string ContactName { get; set; }
        public string Location { get; set; }
        public int Bulk { get; set; }
        public int Individual { get; set; }
        public int PickUp { get; set; }

        public long RequestId { get; set; }
        public Request Request { get; set; }
    }

    public class Volonteer : EntityBase
    {
        [ForeignKey(nameof(Order))]
        public long OrderId { get; set; }
        public Order Order { get; set; }
    }

    public class BaseRequest : EntityBase
    {
        public BaseRequest()
        {
            Children = new List<Child>();    
        }

        public string FamilyName { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public DeliveryType DeliveryType { get; set; }

        [ForeignKey(nameof(Agency))]
        public long AgencyId { get; set; }
        public Agency Agency { get; set; }
        
        public List<Child> Children { get; set; }
    }

    public class Request : BaseRequest
    {
        public RequestStatus Status { get; set; }
    }

    public class Order : BaseRequest
    {
        public OrderStatus Status { get; set; }
    }
    
    public class Child : EntityBase
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public GenderType Gender { get; set; }

        [ForeignKey(nameof(Request))]
        public long RequestId { get; set; }
        public BaseRequest Request { get; set; }

        [ForeignKey(nameof(Order))]
        public long? OrderId { get; set; }
        public Order Order { get; set; }
    }
}
