using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Medic
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int MedicId { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public int CodParafa { get; set; }
        public string Parola { get; set; }


    }
}
