using System;

namespace ReactCore.DAL.Models
{
    public abstract class EntityBase
    {
        protected EntityBase()
        {
            CreatedDate = DateTime.UtcNow;
        }

        public long Id { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
