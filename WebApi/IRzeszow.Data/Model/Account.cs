using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace IRzeszow.Data.Model
{
    public class Account
    {
        public int Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string HashedPassword { get; set; }
        public int UserDataId { get; set; }
        public int CompanyDataId { get; set; }

        public virtual UserData UserData { get; set; }
        public virtual CompanyData CompanyData { get; set; }
    }
}
