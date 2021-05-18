using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Robot
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int RobotId { get; set; }
        public int TratamentId { get; set; }
        public Tratament Tratament { get; set; }
        public bool Ocupat { get; set; }
    }
}
