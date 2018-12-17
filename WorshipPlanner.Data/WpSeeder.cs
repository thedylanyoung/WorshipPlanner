using System;
using System.Linq;
using System.Threading.Tasks;
using WorshipPlanner.Data.Models;
using Microsoft.AspNetCore.Identity;

namespace WorshipPlanner.Data
{
    public class WpSeeder
    {
        private readonly WpContext _context;
        private readonly UserManager<User> _userManager;
        public WpSeeder(WpContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _context.Database.EnsureCreated();

            User user = await _userManager.FindByEmailAsync("test@gmail.com");

            if (user == null)
            {
                user = new User()
                {
                    FirstName = "TestFirst",
                    LastName = "TestLast",
                    Email = "test@gmail.com",
                    UserName = "testuser"
                };

                var result = await _userManager.CreateAsync(user, "Passw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create user in seeder method.");
                }
            }

            var orgs = new Organization[]
            {
                new Organization()
                {
                    OrgName = "Test Community Church",
                    Address1 = "419 Main Street",
                    State = "Texas",
                    Zip = "35464",
                    CreatedBy = "Test",
                    CreatedDate = DateTime.UtcNow
                },
                new Organization()
                {
                    OrgName = "Test Church",
                    Address1 = "Test street",
                    State = "Alabama",
                    Zip = "43675",
                    CreatedBy = "Test",
                    CreatedDate = DateTime.UtcNow
                }
            };

            if (!_context.Organizations.Any())
            {
                //create sample data
                _context.Organizations.AddRange(orgs);
            }

            if (!_context.UserOrgs.Any())
            {
                _context.UserOrgs.Add(new UserOrg()
                {
                    User = user,
                    Organization = orgs[0]
                });
            }

            _context.SaveChanges();
        }
    }

}
