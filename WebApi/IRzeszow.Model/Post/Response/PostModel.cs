using IRzeszow.Component.Enums;
using IRzeszow.Data.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Model.Post.Response
{
    public class PostModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public string Image { get; set; }
        public string PostType { get; set; }
        public Profession Profession { get; set; }

        public virtual IEnumerable<int> TagIds { get; set; }
    }
}
