using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Model.Post.Request
{
    public class CreatePostModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public IFormFile Image { get; set; }
        public string PostType { get; set; }

        public virtual IEnumerable<int> TagIds { get; set; }
    }
}
