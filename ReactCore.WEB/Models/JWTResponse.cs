﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCore.Domain.User;

namespace ReactCore.WEB.Models
{
    public class JWTResponse
    {
        public string access_token { get; set; }
        public int expires_in { get; set; }
        public string refresh_token { get; set; }
        //public string username { get; set; }
        public UserDetails User { get; set; }
    }
}
