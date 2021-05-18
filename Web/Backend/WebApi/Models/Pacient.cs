using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Pacient
    {
        [Key]
        public int PacientId { get; set; }
        public int PacientCNP { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public int Varsta { get; set; }
        public int Telefon { get; set; }
        public string Email { get; set; }
        public string Profesie { get; set; }
        public int MedicId { get; set; }
        public string LocDeMunca { get; set; }
        public bool Sex { get; set; }
        public ICollection<Tratament> Tratamente { get; set; } = new List<Tratament>();
    }
}
