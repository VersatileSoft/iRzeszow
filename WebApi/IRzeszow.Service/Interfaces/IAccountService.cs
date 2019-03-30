using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using IRzeszow.Model.Account.Request;

namespace IRzeszow.Service.Interfaces
{
    public interface IAccountService
    {
        Task CreateUserAsync(CreateUserAccountDto value);
        Task CreateCompanyAsync(CreateCompanyAccountDto value);
    }
}
