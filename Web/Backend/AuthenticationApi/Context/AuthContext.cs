using AuthenticationApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationApi.Context
{
    public class AuthContext : DbContext
    {
        public DbSet<User> User { get; set; }

        public AuthContext(DbContextOptions<AuthContext> options) : base(options)
        {

        }
    }
}
