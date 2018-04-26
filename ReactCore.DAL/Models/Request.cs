﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ReactCore.Domain;

namespace ReactCore.DAL.Models
{
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

        public ICollection<Child> Children { get; set; }
    }

    public class Request : BaseRequest
    {
        public RequestStatus Status { get; set; }
    }

    public class Order : BaseRequest
    {
        [ForeignKey(nameof(Volunteer))]
        public long? VolunteerId { get; set; }
        public Volunteer Volunteer { get; set; }

        public OrderStatus Status { get; set; }
    }
}
