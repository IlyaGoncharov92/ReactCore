using System;

namespace ReactCore.DAL.Models
{
    public class RefreshToken
    {
        public string Id { get; set; }
        public DateTime ExpiresUtc { get; set; }
    }
}
