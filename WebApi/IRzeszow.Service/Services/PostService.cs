using IRzeszow.Data.Model;
using IRzeszow.Model.Post.Request;
using IRzeszow.Model.Post.Response;
using IRzeszow.Repository.Interfaces;
using IRzeszow.Service.Interfaces;
using IRzeszow.WebApi.Service.Exception;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Service.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;
        private readonly ITagRepository _tagRepository;

        public PostService(IPostRepository postRepository, ITagRepository tagRepository)
        {
            _postRepository = postRepository;
            _tagRepository = tagRepository;
        }

        public async Task Create(CreatePostModel value, int OvnerUserId)
        {
            IEnumerable<Tag> tags = await _tagRepository.FindRange(value.TagIds);

            if (tags.Count() != value.TagIds.Count())
                throw new HttpStatusCodeException(HttpStatusCode.BadRequest, "Tag is not exsist");

            byte[] image = null;

            if (value.Image != null)
                using (var memoryStream = new MemoryStream())
                {
                    await value.Image.CopyToAsync(memoryStream);
                    var imageToBeUploadedByteArray = memoryStream.ToArray();
                    image = imageToBeUploadedByteArray;
                }

            await _postRepository.CreatePostAsync(value, tags, image, OvnerUserId);
        }

        public async Task<IEnumerable<IEnumerable<PostModel>>> GetRecentPosts(int ovnerUserId)
        {
            return await _postRepository.GetRecentPosts(ovnerUserId);
        }
    }
}
