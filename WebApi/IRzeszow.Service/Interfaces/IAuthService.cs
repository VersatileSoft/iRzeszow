using IRzeszow.Model.Account.Request;
using IRzeszow.Model.Account.Response;
using System.Threading.Tasks;

namespace IRzeszow.Service.Interfaces
{
    public interface IAuthService
    {
        Task<AccountLoginModel> LoginAsync(LoginDto loginDto);
    }
}
