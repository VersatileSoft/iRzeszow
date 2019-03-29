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
        [Required]
        public string Surename { get; set; }
        [Required]
        public IEnumerable<int> TagsIds { get; set; }
    }
}
