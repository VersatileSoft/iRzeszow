using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using IRzeszow.Model.Post.Request;
using IRzeszow.Model.Post.Response;

namespace IRzeszow.Service.Interfaces
{
    public interface IPostService
    {
        Task Create(CreatePostModel value, int ovnerUserId);
        Task<IEnumerable<IEnumerable<PostModel>>> GetRecentPosts(int ovnerUserId);
    }
}
