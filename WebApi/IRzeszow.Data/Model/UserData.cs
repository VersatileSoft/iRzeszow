﻿using IRzeszow.Component.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Data.Model
{
    public class UserData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surename { get; set; }
        public Genders Gender { get; set; }
        public virtual IEnumerable<TagToUserData> Tags { get; set; }
        public Profession Profession { get; set; }
        public virtual Account Account { get; set; }
    }
}
