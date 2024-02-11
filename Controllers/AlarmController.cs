using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using time.Controllers;
using time_of_your_life.Data;
using time_of_your_life.Model;

namespace time_of_your_life.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlarmController: ControllerBase
    {
        private readonly ILogger<Alarm> _logger;
        private readonly ApplicationDbContext _context;

        public AlarmController(ApplicationDbContext context, ILogger logger)
        {
            _context = context;
        }

        [HttpGet("GetAllAlarms")]
        public async Task<ActionResult<IEnumerable<Alarm>>> GetAllAlarms()
        {
            try
            {
                return new JsonResult(await _context.Alarm.Where(e => e.IsActive == true).ToListAsync());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("GetAlarm")]
        public async Task<ActionResult<Alarm>> GetAlarm(int alarmId)
        {
            try
            {
                return await _context.Alarm.Where(x => x.Id == alarmId).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost("AddAlarm")]
        public Alarm AddAlarm([FromBody] Alarm alarm)
        {
            try
            {
                _context.Alarm.Add(alarm);
                _context.SaveChanges();
                _logger.LogInformation("Saving data from alarm");
                return alarm;
            }
            catch (Exception ex)
            {

                throw ex;
            }
            
        }

        [HttpPost, Route("updateAlarm/{id}")]
        public async Task<ActionResult> UpdateAlarm([FromBody] Alarm alarm)
        {
            try
            {
                _logger.LogInformation("Updating alarm data");
                var alarmToUpdate = _context.Alarm.Where(x => x.Id == alarm.Id).ToArray().FirstOrDefault();
                alarmToUpdate.Hour = alarm.Hour;
                alarmToUpdate.Name = alarm.Name;
                alarmToUpdate.IsActive = alarm.IsActive;
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
