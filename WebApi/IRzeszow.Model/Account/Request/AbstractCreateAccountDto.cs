using IRzeszow.Component.Enums;
using System.ComponentModel.DataAnnotations;

namespace IRzeszow.Model.Account.Request
{
    public class AbstractCreateAccountDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string Phone { get; set; }
    }
}
