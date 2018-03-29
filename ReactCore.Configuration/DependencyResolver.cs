using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ReactCore.BLL.Abstract.Services;
using ReactCore.BLL.Services;
using ReactCore.DAL;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.DAL.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ReactCore.Configuration
{
    public static class DependencyResolver
    {
        public static void Register(IServiceCollection services)
        {
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IProjectService, ProjectService>();
            services.AddTransient<IClientService, ClientService>();

            services.AddTransient<IUserRepository, UserReposotory>();
            services.AddTransient<IProjectRepository, ProjectRepository>();
            services.AddTransient<IClientRpository, ClientRepository>();
        }
    }
}
