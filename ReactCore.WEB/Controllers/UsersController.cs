﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.BLL.Abstract.Services;
using ReactCore.Domain;
using ReactCore.Domain.User;

namespace ReactCore.WEB.Controllers
{
    [Produces("application/json")]
    [Route("api/users")]
    public class UsersController : Controller
    {
        private IUserService UserService { get; }

        public UsersController(IUserService userService)
        {
            UserService = userService;
        }

        [HttpGet]
        [Route("list/{role}")]
        public List<UserDetails> List(UserRole role)
        {
            return UserService.List(role);
        }
    }
}
