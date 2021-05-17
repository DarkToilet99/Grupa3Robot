using AuthenticationApi.Context;
using AuthenticationApi.Models;
using AuthenticationApi.Requests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AuthenticationApi.Controllers
{
    [ApiController]
    [Route("auth")]
    public class TokenController : ControllerBase
    {
        private readonly AuthContext context;
        private readonly IConfiguration configuration;

        public TokenController(AuthContext context,IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserInfo request)
        {
            User user = await context.User.FirstOrDefaultAsync(u => u.Username.Equals(request.Username) && u.Password.Equals(request.Password));
            if(user == null)
            {
                return BadRequest("Invalid credentials");
            }
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, configuration["Jwt:Subject"]),//subiectul
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),//id-ul tokenului
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()),//data trimiterii
                new Claim("UserId",user.UserId.ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));//secretul pt encriptare
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);//encriptare
            var token = new JwtSecurityToken(configuration["Jwt:Issuer"], configuration["Jwt:Audience"], claims, DateTime.Now,DateTime.Now.AddHours(4), signingCredentials: signIn);//construiesc token
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));

        }


    }
}
