using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Context
{
    public class GeneralContext : DbContext
    {
       public DbSet<Medic> Medic { get; set; }
       public DbSet<Pacient> Pacient { get; set; }
       public DbSet<Tratament> Tratament { get; set; }
       public DbSet<Robot> Robot { get; set; }
       public DbSet<Transport> Transport { get; set; }

        public GeneralContext(DbContextOptions<GeneralContext> options) : base(options) {
        
        }
    }
}
