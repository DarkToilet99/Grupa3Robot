using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Context;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class BazaController : ControllerBase
    {
        private readonly GeneralContext context;
        public BazaController(GeneralContext _context)
        {
            this.context = _context;
        }
        public async Task<bool> CreazaLogin(String username, String parola)
        {
            User user = await context.User.Where(u => u.Username.Equals(username)).FirstOrDefaultAsync();
            if (user != null)
            {
                return false;
            }
            user = new User()
            {
                Username = username,
                Password = parola
            };
            context.User.Add(user);
            await context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> StergeLogin(String username)
        {
            User user = await context.User.Where(u => u.Username.Equals(username)).FirstOrDefaultAsync();
            if (user == null)
            {
                return false;
            }
            context.User.Remove(user);
            await context.SaveChangesAsync();
            return true;
        }

    }
}
