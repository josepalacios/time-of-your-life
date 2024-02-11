using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace time.Controllers;

public class ClockProps {
  [Key]
  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
  public int PresetId { get; set; }
  [Required(ErrorMessage = "The font family field is required.")]
  public string FontFamily {get; set;} = "courier";
  public int[] AvailableFontSizes {get; }  = new[] { 12, 24, 48, 64 };
  public int TitleFontSize {get; set;} = 64;
  public int ClockFontSize {get ; set;} = 48;
  public bool BlinkColons {get; set;} = true;
  [Required(ErrorMessage = "The font color field is required.")]
  public string FontColor {get; set;} = "black";
}