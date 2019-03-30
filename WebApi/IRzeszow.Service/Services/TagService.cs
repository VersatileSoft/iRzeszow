using IRzeszow.Model.Tag.Request;
using IRzeszow.Model.Tag.Response;
using IRzeszow.Repository.Interfaces;
using IRzeszow.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IRzeszow.Service.Services
{
    public class TagService : ITagService
    {

        private readonly ITagRepository _tagRepository;

        public TagService(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        public async Task CreateAsync(CreateTagDto value)
        {
            await _tagRepository.CreateAsync(value);
        }

        public async Task<TagModel> GetAsync(int id)
        {
            return await _tagRepository.GetAsync(id);
        }

        public async Task<IEnumerable<TagModel>> GetAllAsync()
        {
            return await _tagRepository.GetAllAsync();
        }

        public async Task<IEnumerable<TagModel>> GetAsync(string name)
        {
            return await _tagRepository.GetAsync(name);
        }
    }
}
