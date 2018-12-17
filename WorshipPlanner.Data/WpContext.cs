using System;
using WorshipPlanner.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace WorshipPlanner.Data
{
    public class WpContext : IdentityDbContext<User>
    {
        public WpContext(DbContextOptions<WpContext> options) : base(options)
        {
        }

        public DbSet<Organization> Organizations { get; set; }
        public DbSet<UserOrg> UserOrgs { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
