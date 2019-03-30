using IRzeszow.Model.Profession.Request;
using IRzeszow.Repository.Interfaces;
using IRzeszow.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Service.Services
{
    public class ProfessionService : IProfessionService
    {
        private readonly IProfessionRepository _professionRepository;

        public ProfessionService(IProfessionRepository professionRepository)
        {
            _professionRepository = professionRepository;
        }
        public async Task CreateAsync(CreateProfessionDto value)
        {
            await _professionRepository.CreateAsync(value);
        }

        public async Task<IEnumerable<ProfessionModel>> GetAllAsync()
        {
            return await _professionRepository.GetAllAsync();
        }
    }
}
