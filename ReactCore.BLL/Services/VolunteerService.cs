using System.Collections.Generic;
using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Services
{
    public class VolunteerService : IVolunteerService
    {
        private IVolunteerRepository VolunteerRepository { get; }

        public VolunteerService(IVolunteerRepository volunteerRepository)
        {
            VolunteerRepository = volunteerRepository;
        }

        public List<UserDetails> List()
        {
            return VolunteerRepository.List();
        }
    }
}
