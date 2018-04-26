using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Repositories
{
    public class AdminManagerRepository : BaseRepository, IAdminManagerRepository
    {
        public AdminManagerRepository(ReactCoreContext context) : base(context)
        {
        }

        public List<UserDetails> List()
        {
            var result = Context.Users
                .Where(x => x.Role == UserRole.AdminManager)
                .ToList();

            return Mapper.Map<List<UserDetails>>(result);
        }
    }
}
