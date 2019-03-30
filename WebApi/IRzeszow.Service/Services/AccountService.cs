using IRzeszow.Service.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using IRzeszow.Data.Model;
using IRzeszow.Repository.Interfaces;
using Microsoft.Extensions.Options;
using IRzeszow.Model.Account.Request;
using System.Threading.Tasks;
using IRzeszow.WebApi.Service.Exception;
using System.Net;
using System.Linq;
using System.Collections.Generic;

namespace IRzeszow.Service.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        private readonly ITagRepository _tagRepository;

        public AccountService(IAccountRepository accountRepository,
            ITagRepository tagRepository)
        {
            _accountRepository = accountRepository;
            _tagRepository = tagRepository;
        }

        public async Task CreateCompanyAsync(CreateCompanyAccountDto value)
        {
            if (await _accountRepository.CheckIfAccountExistAsync(value.Email))
                throw new HttpStatusCodeException(HttpStatusCode.BadRequest, "User already exsist");

            await _accountRepository.CreateCompanyAccountAsync(value);
        }

        public async Task CreateUserAsync(CreateUserAccountDto value)
        {
            if (await _accountRepository.CheckIfAccountExistAsync(value.Email))
                throw new HttpStatusCodeException(HttpStatusCode.BadRequest, "User already exsist");

            IEnumerable<Tag> tags = await _tagRepository.FindRange(value.TagIds);

            if (tags.Count() != value.TagIds.Count())
                throw new HttpStatusCodeException(HttpStatusCode.BadRequest, "Tag is not exsist");

            await _accountRepository.CreateUserAccountAsync(value, tags);
        }
    }
}
