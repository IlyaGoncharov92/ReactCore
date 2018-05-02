using System;

namespace ReactCore.Domain.RefreshToken
{
    public class RefreshTokenDetails
    {
        public string Id { get; set; }
        public DateTime ExpiresUtc { get; set; }
    }
}
