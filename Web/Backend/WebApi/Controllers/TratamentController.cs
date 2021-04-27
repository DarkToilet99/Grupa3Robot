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
    [Route("pacient")]
    public class TratamentController : ControllerBase
    {
        private readonly GeneralContext context;

        public TratamentController(GeneralContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public async Task<IActionResult> TestTratament()
        {
            await context.Pacient.Where(p => p.PacientCNP == 13213141).Include(p => p.Tratamente).FirstOrDefaultAsync();
            Pacient pacient = context.Pacient.Where(p => p.PacientCNP == 13213141).FirstOrDefault();
            Tratament tratament = new Tratament()
            {
                Diagnostic = "s",
                Medicament = "s",
                Pat = 1,
            };
            pacient.Tratamente.Add(tratament);
            await context.SaveChangesAsync();
            return Ok();
            
        }
    }
}
