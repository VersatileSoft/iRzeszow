using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using IRzeszow.Model.Account.Request;

namespace IRzeszow.Service.Interfaces
{
    public interface IAccountService
    {
        Task CreateUser(CreateUserAccountDto value);
        Task CreateCompany(CreateCompanyAccountDto value);
    }
}
