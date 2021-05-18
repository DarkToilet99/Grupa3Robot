using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Context;
using WebApi.Models;
using WebApi.Requests.PacientRequests;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("pacients")]
    public class PacientController : ControllerBase
    {
        private readonly GeneralContext context;

        public PacientController(GeneralContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public async Task<IActionResult> TestPacient(CreatePacientRequest request)
        {
            await context.Medic.Where(m => m.CodParafa == request.MedicId).LoadAsync();
            Medic medic = await context.Medic.Where(m => m.CodParafa == request.MedicId).Include(m=>m.Pacients).FirstOrDefaultAsync();
            if(medic == null)
            {
                return BadRequest();
            }

            medic.Pacients.Add(new Pacient()
            {
                Nume = request.Nume,
                Prenume = request.Prenume,
                PacientCNP = request.PacientCNP,
                Profesie = request.Profesie,
                Sex = request.Sex,
                Telefon = request.Telefon,
                Varsta = request.Varsta,
                Email = request.Email,
                LocDeMunca = request.LocDeMunca,
                MedicId = medic.MedicId
            });


            await context.SaveChangesAsync();

            return Ok("Pacientul a fost adaugat");
        }
        [HttpGet]
        public async Task<IActionResult> GetPacient([FromQuery] int pacientCNP)
        {
            Pacient pacient = await context.Pacient.Where(p => p.PacientCNP == pacientCNP).Include(p=>p.Tratamente).FirstOrDefaultAsync();
            return Ok(pacient);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteMedic(DeletePacientRequest request)
        {
           
            Pacient pacient = await context.Pacient.Where(m => m.PacientCNP.Equals(request.PacientCNP)).FirstOrDefaultAsync();
            if (pacient == null)
            {
                return BadRequest("Nu exista un medic cu acest cod parafa!");
            }
            context.Pacient.Remove(pacient);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
