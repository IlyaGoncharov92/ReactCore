using System.Collections.Generic;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IVolunteerRepository
    {
        List<UserDetails> List();
    }
}
