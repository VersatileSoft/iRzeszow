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

namespace IRzeszow.Service.Services
{
    public class AccountService : IAccountService
    {
        private readonly AppSettings _appSettings;
        private readonly IAccountRepository _accountRepository;

        public AccountService(IOptions<AppSettings> appSettings, IAccountRepository accountRepository)
        {
            _appSettings = appSettings.Value;
            _accountRepository = accountRepository;
        }

        public async Task CreateCompany(CreateCompanyAccountDto value)
        {
            await _accountRepository.CreateCompanyAccount(value);
        }

        public async Task CreateUser(CreateUserAccountDto value)
        {
            await _accountRepository.CreateUserAccount(value);
        }

        private string GenerateToken(Account account)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name, account.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
