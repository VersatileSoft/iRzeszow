using IRzeszow.Data;
using IRzeszow.Model.Account.Request;
using IRzeszow.Repository.Interfaces;
using System;
using Microsoft.EntityFrameworkCore;
using IRzeszow.Data.Model;
using IRzeszow.Component;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;

namespace IRzeszow.Repository.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private IRzeszowDbContext DbContext { get; set; }
        public AccountRepository(IRzeszowDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task CreateCompanyAccountAsync(CreateCompanyAccountDto createCompanyAccountDto)
        {

            byte[] salt = Helpers.GenerateSalt();
            await DbContext.Accounts.AddAsync(
                new Account
                {
                    Email = createCompanyAccountDto.Email,
                    HashedPassword = Helpers.HashPassword(createCompanyAccountDto.Password, salt),
                    Salt = salt,
                    Phone = createCompanyAccountDto.Phone,     
                    CompanyData = new CompanyData
                    {
                        CompanyName = createCompanyAccountDto.CompanyName,
                        Address = createCompanyAccountDto.Address,
                        Website = createCompanyAccountDto.Website
                    },
                    UserData = null
                });
            await DbContext.SaveChangesAsync();
        }

        public async Task CreateUserAccountAsync(CreateUserAccountDto createUserAccountDto, IEnumerable<Tag> Tags)
        {
            UserData userData = new UserData
            {
                Name = createUserAccountDto.Name,
                Surename = createUserAccountDto.Surename,
                Gender = createUserAccountDto.Gender,
                Profession = createUserAccountDto.Profession,
            };

            byte[] salt = Helpers.GenerateSalt();

            await DbContext.Accounts.AddAsync(
                new Account
                {
                    Email = createUserAccountDto.Email,
                    HashedPassword = Helpers.HashPassword(createUserAccountDto.Password, salt),
                    Salt = salt,
                    Phone = createUserAccountDto.Phone,
                    UserData = userData,                   
                    CompanyData = null
                });

            Tags.ToList().ForEach(async tag =>
            {
                await DbContext.TagToUserDatas.AddAsync(new TagToUserData
                {
                    Tag = tag,
                    UserData = userData
                });            
            });

            await DbContext.SaveChangesAsync();
        }

        public async Task<Account> FindByEmailAsync(string email)
        {
            return await DbContext.Accounts.Where(a => a.Email == email).FirstOrDefaultAsync();
        }

        public async Task<bool> CheckIfAccountExistAsync(string email)
        {
            return await DbContext.Accounts.Where(a => a.Email == email).AnyAsync();
        }
    }
}
