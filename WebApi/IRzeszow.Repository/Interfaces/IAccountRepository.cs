using IRzeszow.Model.Account.Request;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Interfaces
{
    public interface IAccountRepository
    {
        Task CreateUserAccount(CreateUserAccountDto accountDto);
        Task CreateCompanyAccount(CreateCompanyAccountDto companyAccountDto);
    }
}
