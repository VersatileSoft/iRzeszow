using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Data.Model
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public byte[] Image { get; set; }
        public string PostType { get; set; }
        public int OvnerAccountId { get; set; }

        public virtual IEnumerable<TagToPost> Tags { get; set; }  
        public virtual Account OvnerAccount { get; set; }
    }
}
