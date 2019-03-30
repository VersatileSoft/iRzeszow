using System.Collections.Generic;
using System.Threading.Tasks;
using IRzeszow.Model.Tag.Request;
using IRzeszow.Model.Tag.Response;
using IRzeszow.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IRzeszow.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagService _tagService;
        public TagController(ITagService tagService)
        {
            _tagService = tagService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TagModel>>> Get()
        {
            return Ok(await _tagService.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TagModel>> Get(int id)
        {
            return Ok(await _tagService.GetAsync(id));
        }

        [HttpGet("by_name/{name}")]
        public async Task<ActionResult<IEnumerable<TagModel>>> GetByName(string name)
        {
            return Ok(await _tagService.GetAsync(name));
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Post([FromBody] CreateTagDto value)
        {
            await _tagService.CreateAsync(value);
            return Ok();
        }
    }
}
