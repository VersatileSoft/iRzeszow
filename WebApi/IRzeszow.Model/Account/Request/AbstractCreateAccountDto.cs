using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Model.Account.Request
{
    public class AbstractCreateAccountDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
