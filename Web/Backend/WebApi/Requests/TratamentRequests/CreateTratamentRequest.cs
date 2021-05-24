using System.ComponentModel.DataAnnotations;

namespace WebApi.Requests.TratamentRequests
{
    public class CreateTratamentRequest
    {
        [Required]
        [Range(0, long.MaxValue)]
        public long PacientCNP { get; set; }
        public string Medicament { get; set; }
        public int Pat { get; set; }
        public string Diagnostic { get; set; }

    }
}
