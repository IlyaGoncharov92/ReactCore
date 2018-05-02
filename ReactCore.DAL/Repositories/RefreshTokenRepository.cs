using System;
using System.Linq;
using AutoMapper;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.DAL.Models;
using ReactCore.Domain.RefreshToken;

namespace ReactCore.DAL.Repositories
{
    public class RefreshTokenRepository : BaseRepository, IRefreshTokenRepository
    {
        public RefreshTokenRepository(ReactCoreContext context) : base(context)
        {
        }

        public RefreshTokenDetails GetById(string id)
        {
            var entity = Context.RefreshTokens.FirstOrDefault(x => x.Id == id);

            return CheckExpires(entity);
        }

        public void Add(RefreshTokenDetails token)
        {
            var entity = Mapper.Map<RefreshToken>(token);

            Context.RefreshTokens.Add(entity);

            Context.SaveChanges();
        }

        private RefreshTokenDetails CheckExpires(RefreshToken entity)
        {
            if (entity?.ExpiresUtc < DateTime.UtcNow)
            {
                Context.RefreshTokens.Remove(entity);

                Context.SaveChanges();

                return null;
            }
            else
            {
                return Mapper.Map<RefreshTokenDetails>(entity);
            }
        }
    }
}
