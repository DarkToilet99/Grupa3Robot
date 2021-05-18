using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Tratament
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int TratamentId { get; set; }
        public int PacientId { get; set; }
        public Pacient Pacient { get; set; }
        public string Medicament { get; set; }
        public int Pat { get; set; }
        public string Diagnostic { get; set; }
    }
}
