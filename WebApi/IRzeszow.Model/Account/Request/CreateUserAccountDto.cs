﻿using System.Collections;
using System.Collections.Generic;

namespace IRzeszow.Model.Account.Request
{
    public class CreateUserAccountDto : AbstractCreateAccountDto
    {
        public string Name { get; set; }
        public string Surename { get; set; }
        public IEnumerable<int> TagsIds { get; set; }
    }
}