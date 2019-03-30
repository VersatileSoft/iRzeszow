using IRzeszow.Data.Model;
using IRzeszow.Model.Account.Request;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Interfaces
{
    public interface IAccountRepository
    {
        Task CreateUserAccountAsync(CreateUserAccountDto accountDto, IEnumerable<Tag> tags);
        Task CreateCompanyAccountAsync(CreateCompanyAccountDto companyAccountDto);
        Task<Account> FindByEmailAsync(string email);
        Task<bool> CheckIfAccountExistAsync(string email);
    }
}
