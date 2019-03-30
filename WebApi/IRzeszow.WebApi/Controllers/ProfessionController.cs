using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRzeszow.Model.Profession.Request;
using IRzeszow.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IRzeszow.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessionController : ControllerBase
    {
        private readonly IProfessionService _professionService;

        public ProfessionController(IProfessionService professionService)
        {
            _professionService = professionService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfessionModel>>> GetAllAsync()
        {
            return Ok(await _professionService.GetAllAsync());
        }

        [HttpPost]
        public async Task<ActionResult> CreateAsync([FromBody] CreateProfessionDto value)
        {
            await _professionService.CreateAsync(value);
            return Ok();
        }
    }
}
