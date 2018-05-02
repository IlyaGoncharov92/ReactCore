﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCore.WEB.Models
{
    public class JWTRequest
    {
        public string grant_type { get; set; }
        public string refresh_token { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}
