using System.Collections.Generic;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IAgencyRepository
    {
        List<UserDetails> List();
    }
}
