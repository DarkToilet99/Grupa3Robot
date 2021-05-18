namespace WebApi.Requests.TratamentRequests
{
    public class CreateTratamentRequest
    {
        public int PacientCNP { get; set; }
        public string Medicament { get; set; }
        public int Pat { get; set; }
        public string Diagnostic { get; set; }

    }
}
