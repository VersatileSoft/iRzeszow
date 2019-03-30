using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Data.Model
{
    public class TagToPost
    {
        public virtual Tag Tag { get; set; }
        public virtual Post Post { get; set; }

        public int TagId { get; set; }
        public int PostId { get; set; }
    }
}
