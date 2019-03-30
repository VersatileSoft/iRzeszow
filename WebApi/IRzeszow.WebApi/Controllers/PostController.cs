using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRzeszow.Model.Post.Request;
using IRzeszow.Model.Post.Response;
using IRzeszow.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IRzeszow.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        public async Task<ActionResult<IEnumerable<IEnumerable<PostModel>>>> GetAsync()
        {
            return Ok(await _postService.GetRecentPosts(int.Parse(User.Identity.Name)));
        }

        [HttpPost]
        [Authorize(Roles = "Company")]
        public async Task<ActionResult> Post([FromBody] CreatePostModel Value)
        {
            await _postService.Create(Value, int.Parse(User.Identity.Name));
            return Ok();
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
