using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Context;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("transport")]
    public class TransportController : ControllerBase
    {
        private readonly GeneralContext context;

        public TransportController(GeneralContext context)
        {
            this.context = context;
        }
    }
}
