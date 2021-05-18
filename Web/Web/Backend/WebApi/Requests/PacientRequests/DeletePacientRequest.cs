﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Requests.PacientRequests
{
    public class DeletePacientRequest
    {
        [Required]
        [Range(0, int.MaxValue)]
        public int PacientCNP { get; set; }
    }
}
