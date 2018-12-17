using System;
using System.ComponentModel.DataAnnotations;

namespace WorshipPlanner.Data.Models
{
    public class Organization
    {
        [Key]
        public int Id { get; set; }

        public string OrgName { get; set; }

        public string Address1 { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
