using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRzeszow.Model.Account.Request;
using IRzeszow.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IRzeszow.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<string>>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}", Name = "Get")]
        public async Task<ActionResult<string>> Get(int id)
        {
            return "value";
        }

        [HttpPost("company")]
        public async Task<ActionResult> CreateCompany([FromBody] CreateCompanyAccountDto value)
        {
            await _accountService.CreateCompany(value);
            return Ok();
        }

        [HttpPost("user")]
        public async Task<ActionResult> CreateUser([FromBody] CreateUserAccountDto value)
        {
            await _accountService.CreateUser(value);
            return Ok();
        }

        [HttpPut("company/{id}")]
        public async Task<ActionResult> UpdateCompany(int id, [FromBody] string value)
        {
            return Ok();
        }

        [HttpPut("user/{id}")]
        public async Task<ActionResult> UpdateUser(int id, [FromBody] string value)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok();
        }
    }
}
