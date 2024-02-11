using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace time.Controllers;

[ApiController]
[Route("[controller]")]
public class ClockController : ControllerBase
{
    private static List<ClockProps> _presets = new List<ClockProps>(){ new() };

    private readonly ILogger<ClockController> _logger;

    public ClockController(ILogger<ClockController> logger)
    {
        _logger = logger;
    }

    [HttpGet, Route("presets")]
    public IEnumerable<ClockProps> GetPresets()
    {
        _logger.LogInformation("Getting data from presets");
        return _presets.ToArray();
    }

    [HttpGet, Route("presets/{id}")]
    public ClockProps GetPreset(int titleId)
    {
        _logger.LogInformation("Getting data from specific preset");
        return _presets.Where(x => x.PresetId == titleId).ToArray().FirstOrDefault();
    }

    [HttpPost, Route("updatePreset/{id}")]
    public async Task<ActionResult> UpdatePreset([FromBody] ClockProps preset)
    {
        try
        {
            _logger.LogInformation("Updating preset data");
            var presetToUpdate = _presets.Where(x => x.PresetId == preset.PresetId).ToArray().FirstOrDefault();
            presetToUpdate.FontFamily = preset.FontFamily;
            presetToUpdate.TitleFontSize = preset.TitleFontSize;
            presetToUpdate.ClockFontSize = preset.ClockFontSize;
            presetToUpdate.TextTitle = preset.TextTitle;
            return Ok();
        }
        catch (Exception ex)
        {

            throw ex;
        }
      
    }

    [HttpPost("presets")]
    public ClockProps AddPreset([FromBody]ClockProps preset)
    {

        _presets.Add(preset);
        _logger.LogInformation("Saving data from presets");
        return preset;
    }
}
