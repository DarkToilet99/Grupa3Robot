using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Requests
{
    public class DeleteMedicRequest
    {
        [Required]
        [Range(0,int.MaxValue)]
        public int CodParafa { get; set; }
    }
}
