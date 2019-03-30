using IRzeszow.Data.Model;
using IRzeszow.Model.Post.Request;
using IRzeszow.Model.Post.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Interfaces
{
    public interface IPostRepository
    {
        Task CreatePostAsync(CreatePostModel value, IEnumerable<Tag> tags, int OvnerUserId);
        Task<IEnumerable<IEnumerable<PostModel>>> GetRecentPosts(int ovnerUserId);
    }
}
