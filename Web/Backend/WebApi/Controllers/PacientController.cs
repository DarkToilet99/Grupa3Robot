using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Context;
using WebApi.Models;

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
        public async Task<IActionResult> TestPacient()
        {
            Pacient pacient = new Pacient()
            {
                PacientCNP = 13213141,
                Nume = "test",
                Prenume = "test",
                Email = "a",
                LocDeMunca = "a",
                Profesie = "a",
                Sex = true,
                Telefon = 1,
                Varsta = 1
            };
            context.Pacient.Add(pacient);
            await context.SaveChangesAsync();
            return Ok(pacient);
        }
        [HttpGet]
        public async Task<IActionResult> GetPacient()
        {
            Pacient pacient = await context.Pacient.Where(p => p.PacientCNP == 13213141).Include(p=>p.Tratamente).FirstOrDefaultAsync();
            return Ok(pacient);
        }
        
    }
}
