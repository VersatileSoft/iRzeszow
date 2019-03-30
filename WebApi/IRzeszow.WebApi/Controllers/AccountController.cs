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

        [HttpPost("company")]
        public async Task<ActionResult> CreateCompanyAsync([FromBody] CreateCompanyAccountDto value)
        {
            await _accountService.CreateCompanyAsync(value);
            return Ok();
        }

        [HttpPost("user")]
        public async Task<ActionResult> CreateUserAsync([FromBody] CreateUserAccountDto value)
        {
            await _accountService.CreateUserAsync(value);
            return Ok();
        }
    }
}
