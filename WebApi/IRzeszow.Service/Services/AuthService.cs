using IRzeszow.Component;
using IRzeszow.Data.Model;
using IRzeszow.Model.Account.Request;
using IRzeszow.Model.Account.Response;
using IRzeszow.Repository.Interfaces;
using IRzeszow.Service.Interfaces;
using IRzeszow.WebApi.Service.Exception;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Service.Services
{
    public class AuthService : IAuthService
    {

        private readonly AppSettings _appSettings;
        private readonly IAccountRepository _accountRepository;

        public AuthService(IOptions<AppSettings> appSettings, IAccountRepository accountRepository)
        {
            _appSettings = appSettings.Value;
            _accountRepository = accountRepository;
        }

        public async Task<AccountLoginModel> LoginAsync(LoginDto loginDto)
        {
            Account account = await _accountRepository.FindByEmailAsync(loginDto.Email);

            if (account == null || account.HashedPassword != Helpers.HashPassword(loginDto.Password, account.Salt))
            {
                throw new HttpStatusCodeException(HttpStatusCode.BadRequest, "Incorrect email or password");
            }

            return new AccountLoginModel
            {
                Token = GenerateToken(account),
                IsCompany = account.UserDataId == null
            };
        }

        private string GenerateToken(Account account)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name, account.Id.ToString()),
                    new Claim(ClaimTypes.Role, account.CompanyDataId == null ? "User" : "Company")
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
