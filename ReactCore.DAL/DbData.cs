using System.Collections.Generic;
using System.Linq;
using ReactCore.DAL.Models;

namespace ReactCore.DAL
{
    public static class DbData
    {
        public static void Seed(ReactCoreContext context)
        {
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
                });

                context.Users.Add(new User
                {
                    Email = "ilya.goncharov@itmint.ca",
                    Password = "ilya.goncharov@itmint.ca",
                    FirstName = "Ilya",
                    LastName = "Goncharov",
                });

                context.Users.Add(new User
                {
                    Email = "vadzim.dvorak@itmint.ca",
                    Password = "vadzim.dvorak@itmint.ca",
                    FirstName = "Vadzim",
                    LastName = "Dvorak",
                });

                context.SaveChanges();
            }
        }
    }
}
