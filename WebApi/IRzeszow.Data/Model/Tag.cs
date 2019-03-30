using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Data.Model
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<TagToUserData> UserDatas { get; set; }
        public virtual IEnumerable<TagToPost> Posts { get; set; }
    }
}
