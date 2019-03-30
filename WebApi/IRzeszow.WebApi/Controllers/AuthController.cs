using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRzeszow.Model.Account.Request;
using IRzeszow.Model.Account.Response;
using IRzeszow.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IRzeszow.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<ActionResult<AccountLoginModel>> LoginAsync([FromBody] LoginDto value)
        {
            return Ok(await _authService.LoginAsync(value));
        }
    }
}
