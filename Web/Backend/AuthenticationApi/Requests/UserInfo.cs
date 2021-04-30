using System.ComponentModel.DataAnnotations;

namespace AuthenticationApi.Requests
{
    public class UserInfo
    {
        [Required(AllowEmptyStrings = false)]
        [MaxLength(50)]
        public string Username { get; set; }
        [Required(AllowEmptyStrings = false)]
        [MaxLength(50)]
        public string Password { get; set; }
    }
}
