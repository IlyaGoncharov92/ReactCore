﻿using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.DAL.Models;
using ReactCore.Domain;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Repositories
{
    public class UserReposotory : BaseRepository, IUserRepository
    {
        public UserReposotory(ReactCoreContext context) : base(context)
        {
        }

        public List<UserDetails> List(UserRole role)
        {
            var result = new List<User>();

            var query = Context.Users.Where(x => x.Role == role).AsQueryable();

            switch (role)
            {
                case UserRole.Agency:
                    result = query.Include(x => x.Agency).ToList();
                    break;
                case UserRole.AgencyManager:
                    result = query.Include(x => x.AgencyManager).ToList();
                    break;
                case UserRole.Volunteer:
                    result = query.Include(x => x.Volunteer).ToList();
                    break;
            }

            return Mapper.Map<List<UserDetails>>(result);
        }

        public UserDetails GetByEmail(string email)
        {
            return Context.Users.ProjectTo<UserDetails>().FirstOrDefault(x => x.Email == email);
        }
    }
}
