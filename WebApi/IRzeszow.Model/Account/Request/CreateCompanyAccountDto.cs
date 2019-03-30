using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace IRzeszow.Model.Account.Request
{
    public class CreateCompanyAccountDto : AbstractCreateAccountDto
    {
        [Required]
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }
    }
}
