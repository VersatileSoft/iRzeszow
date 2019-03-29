using IRzeszow.Data;
using IRzeszow.Model.Account.Request;
using IRzeszow.Repository.Interfaces;
using System;
using Microsoft.EntityFrameworkCore;
using IRzeszow.Data.Model;
using IRzeszow.Component;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private IRzeszowDbContext DbContext { get; set; }
        public AccountRepository(IRzeszowDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task CreateCompanyAccount(CreateCompanyAccountDto createCompanyAccountDto)
        {
            await DbContext.Accounts.AddAsync(
                new Account
                {
                    Email = createCompanyAccountDto.Email,
                    HashedPassword = Helpers.HashPassword(createCompanyAccountDto.Password, Helpers.GenerateSalt()),
                    CompanyData = new CompanyData
                    {
                        CompanyName = createCompanyAccountDto.CompanyName
                    },
                    UserData = null                   
                });
            await DbContext.SaveChangesAsync();
        }

        public async Task CreateUserAccount(CreateUserAccountDto createUserAccountDto)
        {
            await DbContext.Accounts.AddAsync(
                new Account
                {
                    Email = createUserAccountDto.Email,
                    HashedPassword = Helpers.HashPassword(createUserAccountDto.Password, Helpers.GenerateSalt()),
                    UserData = new UserData
                    {
                        Name = createUserAccountDto.Name,
                        Surename = createUserAccountDto.Surename
                    },
                    CompanyData = null
                });
            await DbContext.SaveChangesAsync();
        }
    }
}
