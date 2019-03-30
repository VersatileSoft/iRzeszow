using IRzeszow.Component.Enums;
using System.Collections;
using System.Collections.Generic;

namespace IRzeszow.Model.Account.Request
{
    public class CreateUserAccountDto : AbstractCreateAccountDto
    {
        public string Name { get; set; }
        public string Surename { get; set; }
        public IEnumerable<int> TagIds { get; set; }
        public Genders Gender { get; set; }
        public Profession Profession { get; set; }
    }
}
