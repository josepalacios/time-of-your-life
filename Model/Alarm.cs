using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace time_of_your_life.Model
{
    public class Alarm
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [DisplayName("Alarm Hour")]
        public DateTime? Hour { get; set; }
        [DisplayName("Alarm Name")]
        public string Name { get; set; }
        public bool IsActive { get; set; }
    }
}
