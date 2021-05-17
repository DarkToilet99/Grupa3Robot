using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Requests
{
    public class CreateMedicRequest
    {
        [Required(AllowEmptyStrings =false)]
        public string Nume { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Prenume { get; set; }
        [Required]
        [Range(0,int.MaxValue)]
        public int CodParafa { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Parola { get; set; }
    }
}
