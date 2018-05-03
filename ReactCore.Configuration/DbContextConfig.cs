using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ReactCore.Common.AppSettings;
using ReactCore.DAL;

namespace ReactCore.Configuration
{
    public static class DbContextConfig
    {
        public static void Register(IServiceCollection services, IAppConfigurations config)
        {
            var connection = config.ConnectionStrings.DefaultConnection;

            services.AddDbContext<ReactCoreContext>(options => options.UseSqlServer(connection));
        }

        public static void InitSeed(IWebHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<ReactCoreContext>();
                    DbData.Seed(context);
                }
                catch (Exception ex)
                {
                    //var logger = services.GetRequiredService<ILogger<Program>>();
                    //logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }
        }
    }
}
