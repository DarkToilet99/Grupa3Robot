using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Requests.PacientRequests
{
    public class CreatePacientRequest
    {
        [Required]
        [Range(0, int.MaxValue)]
        public int MedicId { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Nume { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Prenume { get; set; }
        [Required]
        [Range(0, int.MaxValue)]
        public int PacientCNP { get; set; }
        [Required]
        [Range(0, int.MaxValue)]
        public int Varsta { get; set; }
        [Required]
        [Range(0, int.MaxValue)]
        public int Telefon { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Email { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Profesie { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string LocDeMunca { get; set; }
        [Required]
        public bool Sex { get; set; }
    }
}


