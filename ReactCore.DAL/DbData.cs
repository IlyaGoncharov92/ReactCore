using System.Collections.Generic;
using System.Linq;
using ReactCore.DAL.Models;

namespace ReactCore.DAL
{
    public static class DbData
    {
        public static void Seed(ReactCoreContext context)
        {
            if (!context.Clients.Any())
            {
                context.Clients.Add(new Client
                {
                    Name = "Jerry"
                });

                context.Clients.Add(new Client
                {
                    Name = "Angelo"
                });

                context.Clients.Add(new Client
                {
                    Name = "ITMINT"
                });

                context.SaveChanges();
            }

            if (!context.Projects.Any())
            {
                var jerry = 1;
                var angelo = 2;
                var itmint = 3;

                context.Projects.Add(new Project
                {
                    Name = "Attend",
                    ClientId = itmint,
                    Color = "red"
                });

                context.Projects.Add(new Project
                {
                    Name = "Upward",
                    ClientId = itmint,
                    Color = "black"
                });

                context.Projects.Add(new Project
                {
                    Name = "DMS",
                    ClientId = jerry,
                    Color = "orange"
                });

                context.Projects.Add(new Project
                {
                    Name = "SAL",
                    ClientId = jerry,
                    Color = "#00000"
                });

                context.Projects.Add(new Project
                {
                    Name = "Kush Card",
                    ClientId = angelo,
                    Color = "green"
                });

                context.SaveChanges();
            }


            if (!context.Users.Any())
            {
                var Attend = 1;
                var Upward = 2;
                var DMS = 3;
                var SAL = 4;
                var KushCard = 5;

                context.Users.Add(new User
                {
                    Email = "max.trukhanovich@itmint.ca",
                    Password = "max.trukhanovich@itmint.ca",
                    FirstName = "Max",
                    LastName = "Truchanovich",
                    UserProjects = new List<UserProjects>
                    {
                        new UserProjects{ProjectId = DMS}
                    }
                });

                context.Users.Add(new User
                {
                    Email = "ilya.goncharov@itmint.ca",
                    Password = "ilya.goncharov@itmint.ca",
                    FirstName = "Ilya",
                    LastName = "Goncharov",
                    UserProjects = new List<UserProjects>
                    {
                        new UserProjects{ProjectId = Attend},
                        new UserProjects{ProjectId = Upward},
                        new UserProjects{ProjectId = DMS},
                        new UserProjects{ProjectId = SAL},
                    }
                });

                context.Users.Add(new User
                {
                    Email = "vadzim.dvorak@itmint.ca",
                    Password = "vadzim.dvorak@itmint.ca",
                    FirstName = "Vadzim",
                    LastName = "Dvorak",
                    UserProjects = new List<UserProjects>
                    {
                        new UserProjects{ProjectId = DMS},
                        new UserProjects{ProjectId = SAL},
                        new UserProjects{ProjectId = KushCard},
                    }
                });

                context.SaveChanges();
            }
        }
    }
}
