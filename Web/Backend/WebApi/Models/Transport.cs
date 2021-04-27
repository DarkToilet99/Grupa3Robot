using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Transport
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int TransportId { get; set; }
        public int RobotId { get; set; }
        public Robot Robot { get; set; }
        public int TratamentId { get; set; }
        public Tratament Tratament { get; set; }
        public DateTime Data { get; set; }
        public bool Efectuat { get; set; }
    }
}
