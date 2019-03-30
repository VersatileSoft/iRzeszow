using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using IRzeszow.Model.Profession.Request;

namespace IRzeszow.Service.Interfaces
{
    public interface IProfessionService
    {
        Task<IEnumerable<ProfessionModel>> GetAllAsync();
        Task CreateAsync(CreateProfessionDto value);
    }
}
