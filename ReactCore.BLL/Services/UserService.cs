using System.Collections.Generic;
using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Services
{
    public class UserService : IUserService
    {
        private IUserRepository UserRepository { get; }

        public UserService(IUserRepository userRepository)
        {
            UserRepository = userRepository;
        }

        public List<UserDetails> List(UserRole role)
        {
            return UserRepository.List(role);
        }

        public UserDetails GetByEmail(string email)
        {
            return UserRepository.GetByEmail(email);
        }
    }
}
