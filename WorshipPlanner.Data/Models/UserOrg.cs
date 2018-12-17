using System.ComponentModel.DataAnnotations.Schema;

namespace WorshipPlanner.Data.Models
{
    public class UserOrg
    {
        public int Id { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        [ForeignKey("OrgId")]
        public Organization Organization { get; set; }
    }
}
