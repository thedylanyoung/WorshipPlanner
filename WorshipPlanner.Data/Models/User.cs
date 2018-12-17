using System;
using Microsoft.AspNetCore.Identity;

namespace WorshipPlanner.Data.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
