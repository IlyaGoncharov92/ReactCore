using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ReactCore.Common.AppSettings;
using ReactCore.Configuration;
using ReactCore.WEB.Providers;

namespace ReactCore.WEB
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddMvc();
            
            services.AddOptions();
            services.Configure<AppSettingsConfig>(Configuration);
            services.AddTransient<IAppConfigurations, AppConfigurations>();
            
            services.AddTransient<OAuthProvider>();
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();

            DependencyResolver.Register(services);
            
            MappingConfig.Register();
            
            using (var provider = services.BuildServiceProvider())
            {
                var config = provider.GetService<IAppConfigurations>();

                DbContextConfig.Register(services, config);

                services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidIssuer = config.Jwt.Issuer,

                            ValidateAudience = true,
                            ValidAudience = config.Jwt.Audience,

                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(config.Jwt.Secret)),

                            ValidateLifetime = true,
                            ClockSkew = TimeSpan.Zero
                        };
                    });
            }  
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors(builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());

                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
        }
    }
}
