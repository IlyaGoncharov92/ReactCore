using System.Collections.Generic;
using System.Linq;
using ReactCore.DAL.Models;
using ReactCore.Domain;

namespace ReactCore.DAL
{
    public static class DbData
    {
        public static void Seed(ReactCoreContext context)
        {
            CreateUsers(context);
        }

        private static void CreateUsers(ReactCoreContext context)
        {
            if (!context.Users.Any())
            {
                CreateAdmins();
                CreateAgencies();
                CreateVolunteers();
            }

            void CreateAdmins()
            {
                context.Users.Add(new User
                {
                    Email = "admin@itmint.ca",
                    Password = "admin@itmint.ca",
                    FirstName = "Admin",
                    LastName = "Admin",
                    Role = UserRole.SuperAdmin
                });

                context.Users.Add(new User
                {
                    Email = "adminmanager1@itmint.ca",
                    Password = "adminmanager1@itmint.ca",
                    FirstName = "Admin1",
                    LastName = "Manager1",
                    Role = UserRole.AdminManager
                });

                context.Users.Add(new User
                {
                    Email = "adminmanager2@itmint.ca",
                    Password = "adminmanager2@itmint.ca",
                    FirstName = "Admin2",
                    LastName = "Manager2",
                    Role = UserRole.AdminManager
                });

                context.SaveChanges();
            }

            void CreateAgencies()
            {
                context.Users.Add(new User
                {
                    Email = "agency1@itmint.ca",
                    Password = "agency1@itmint.ca",
                    FirstName = "Agency1",
                    LastName = "Agency111",
                    Role = UserRole.Agency,
                    Agency = new Agency
                    {
                        ContactName = "Yasya",
                        Location = "Minsk",
                        Bulk = 1,
                        Pickup = 8,
                        Individual = 4
                    }
                });

                context.Users.Add(new User
                {
                    Email = "agency2@itmint.ca",
                    Password = "agency2@itmint.ca",
                    FirstName = "Agency2",
                    LastName = "Agency222",
                    Role = UserRole.Agency,
                    Agency = new Agency
                    {
                        ContactName = "Jerry",
                        Location = "London",
                        Bulk = 11,
                        Pickup = 3,
                        Individual = 0
                    }
                });

                context.SaveChanges();

                var agencies = context.Agencies.ToList();

                context.Users.Add(new User
                {
                    Email = "agencyManager1@itmint.ca",
                    Password = "agencyManager1@itmint.ca",
                    FirstName = "AgencyManager1",
                    LastName = "AgencyManager1111",
                    Role = UserRole.AgencyManager,
                    AgencyManager = new AgencyManager
                    {
                        AgencyId = agencies[0].UserId
                    }
                });

                context.Users.Add(new User
                {
                    Email = "agencyManager2@itmint.ca",
                    Password = "agencyManager2@itmint.ca",
                    FirstName = "AgencyManager2",
                    LastName = "AgencyManager222",
                    Role = UserRole.AgencyManager,
                    AgencyManager = new AgencyManager
                    {
                        AgencyId = agencies[0].UserId
                    }
                });

                context.Users.Add(new User
                {
                    Email = "agencyManager3@itmint.ca",
                    Password = "agencyManager3@itmint.ca",
                    FirstName = "AgencyManager3",
                    LastName = "AgencyManager3333",
                    Role = UserRole.AgencyManager,
                    AgencyManager = new AgencyManager
                    {
                        AgencyId = agencies[0].UserId
                    }
                });

                context.Users.Add(new User
                {
                    Email = "agencyManager4@itmint.ca",
                    Password = "agencyManager4@itmint.ca",
                    FirstName = "AgencyManager4",
                    LastName = "AgencyManager4444",
                    Role = UserRole.AgencyManager,
                    AgencyManager = new AgencyManager
                    {
                        AgencyId = agencies[1].UserId
                    }
                });

                context.SaveChanges();
            }

            void CreateVolunteers()
            {
                context.Users.Add(new User
                {
                    Email = "volunteer1@itmint.ca",
                    Password = "volunteer1@itmint.ca",
                    FirstName = "Volunteer1",
                    LastName = "Volunteer111",
                    Role = UserRole.Volunteer
                });

                context.Users.Add(new User
                {
                    Email = "volunteer2@itmint.ca",
                    Password = "volunteer2@itmint.ca",
                    FirstName = "Volunteer2",
                    LastName = "Volunteer222",
                    Role = UserRole.Volunteer
                });

                context.SaveChanges();
            }
        }
    }
}
