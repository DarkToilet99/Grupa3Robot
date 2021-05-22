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
        public async Task<IActionResult> CreazaPacient(CreatePacientRequest request)
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
            Pacient pacient = await context.Pacient.Where(p => p.PacientCNP == pacientCNP).Include(p => p.Tratamente).Include(m=>m.PacientId).FirstOrDefaultAsync();
            return Ok(pacient);
        }

        
        [HttpGet]
        [Route("pacientiMedic")]
        public async Task<IActionResult> GetPacients([FromQuery] int codParafa)
        {
            await context.Medic.Where(m => m.CodParafa == codParafa).LoadAsync();
            Medic medic = await context.Medic.Where(m => m.CodParafa == codParafa).Include(m => m.Pacients).ThenInclude(a=>a.Tratamente).FirstOrDefaultAsync();
            if (medic == null)
            {
                return BadRequest();
            }
            return Ok(medic.Pacients);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteMedic(DeletePacientRequest request,[FromQuery] int codParafa)
        {

            await context.Medic.Where(m => m.CodParafa == codParafa).LoadAsync();
            Medic medic = await context.Medic.Where(m => m.CodParafa == codParafa).Include(m => m.Pacients).FirstOrDefaultAsync();

            Pacient pacient =  medic.Pacients.Where(m => m.PacientCNP == request.PacientCNP).FirstOrDefault();
            if (medic.Pacients == null)
            {
                return BadRequest("Nu exista un pacient cu acest cnp!");
            }
            context.Pacient.Remove(pacient);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
