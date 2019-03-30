using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRzeszow.Data;
using IRzeszow.Data.Model;
using IRzeszow.Model.Post.Request;
using IRzeszow.Model.Post.Response;
using IRzeszow.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace IRzeszow.Repository.Repositories
{
    public class PostRepository : IPostRepository
    {

        private IRzeszowDbContext DbContext { get; set; }
        public PostRepository(IRzeszowDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task CreatePostAsync(CreatePostModel value, IEnumerable<Tag> tags, byte[] image, int OvnerUserId)
        {
            Post post = new Post
            {
                OvnerAccountId = OvnerUserId,
                DateFrom = value.DateFrom,
                DateTo = value.DateTo,
                Description = value.Description,
                Title = value.Title,
                Image = image
            };

            await DbContext.Posts.AddAsync(post);

            tags.ToList().ForEach(async tag =>
            {
                await DbContext.TagToPosts.AddAsync(new TagToPost
                {
                    Tag = tag,
                    Post = post
                });
            });

            await DbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<IEnumerable<PostModel>>> GetRecentPosts(int ovnerUserId)
        {

            IEnumerable<int> UserTags = await DbContext.TagToUserDatas.Where(t => t.UserData.Id == ovnerUserId).Select(t => t.TagId).ToListAsync();

            List<Post> SortedPosts = await (from Post in DbContext.Posts
                                            orderby UserTags.Where(u => u == Post.Id).Count()
                                            select Post).ToListAsync();

            List<List<PostModel>> postModels = new List<List<PostModel>>();

            for (int i = 0; i < SortedPosts.Count(); i++)
            {
                if (i % 3 == 0)
                {
                    postModels.Add(new List<PostModel>());
                }
  
                postModels[i / 3].Add( new PostModel
                {
                    DateFrom = SortedPosts[i].DateFrom,
                    DateTo = SortedPosts[i].DateTo,
                    Description = SortedPosts[i].Description,
                    Image = SortedPosts[i].Image != null ? string.Format("data:image/png;base64,{0}", Convert.ToBase64String(SortedPosts[i].Image)) : null,
                    Title = SortedPosts[i].Title,
                    PostType = SortedPosts[i].PostType,
                    TagIds = SortedPosts[i].Tags.Select(t => t.TagId)
                });
            }

            return postModels;
        }
    }
}
