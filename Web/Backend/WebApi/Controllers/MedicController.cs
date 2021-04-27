using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Context;
using WebApi.Models;
using WebApi.Requests;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("medics")]
    public class MedicController : ControllerBase
    {
        public readonly GeneralContext context;

        public MedicController(GeneralContext _context)
        {
            context = _context;
        }

    [HttpGet]
    public async Task<IActionResult> GetMedics()
    {
            var medics = await context.Medic.ToListAsync();
            return Ok(medics);
    }
        [HttpPost]
        public async Task<IActionResult> CreateMedic(CreateMedicRequest request)
        {
            if (await context.Medic.Where(m => m.CodParafa == request.CodParafa).AnyAsync())
            {
                return BadRequest("Exista deja un medic cu acest cod parafa");
            }
            Medic medic = new Medic()
            {
                Nume = request.Nume,
                Prenume = request.Prenume,
                CodParafa = request.CodParafa,
                Parola = request.Parola
            };
            context.Medic.Add(medic);
            await context.SaveChangesAsync();

            return Ok("Medicul a fost inregistrat");
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteMedic(DeleteMedicRequest request,[FromQuery]string secret)
        {
            if (!secret.Equals("se2"))
            {
                return Unauthorized("Nu ai voie sa faci asta");
            }
            Medic medic = await context.Medic.Where(m => m.CodParafa.Equals(request.CodParafa)).FirstOrDefaultAsync();
            if(medic == null)
            {
                return BadRequest("Nu exista un medic cu acest cod parafa!");
            }
            context.Medic.Remove(medic);
            await context.SaveChangesAsync();
            return NoContent();
        }



    }
}
