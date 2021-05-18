using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Context;
using WebApi.Models;
using WebApi.Requests.TratamentRequests;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("pacient")]
    public class TratamentController : ControllerBase
    {
        private readonly GeneralContext context;

        public TratamentController(GeneralContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public async Task<IActionResult> TestTratament(CreateTratamentRequest request)
        {
            await context.Pacient.Where(p => p.PacientCNP == request.PacientCNP).Include(p => p.Tratamente).FirstOrDefaultAsync();
            Pacient pacient = context.Pacient.Where(p => p.PacientCNP == request.PacientCNP).FirstOrDefault();
            if(pacient == null)
            {
                return BadRequest();
            }
            pacient.Tratamente.Add(new Tratament() 
            { 
                Diagnostic = request.Diagnostic,
                Medicament = request.Medicament,
                Pat = request.Pat,
                PacientId = pacient.PacientId,
            });


            await context.SaveChangesAsync();
            return Ok();
            
        }
    }
}
