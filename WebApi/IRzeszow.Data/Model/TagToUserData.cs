using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Data.Model
{
    public class TagToUserData
    {
        public int UserDataId { get; set; }
        public int TagId { get; set; }
        public virtual Tag Tag { get; set; }
        public virtual UserData UserData { get; set; }
    }
}
