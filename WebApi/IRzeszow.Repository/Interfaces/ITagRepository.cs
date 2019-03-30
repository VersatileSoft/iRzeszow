using IRzeszow.Data.Model;
using IRzeszow.Model.Tag.Request;
using IRzeszow.Model.Tag.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Interfaces
{
    public interface ITagRepository
    {
        Task CreateAsync(CreateTagDto value);
        Task<TagModel> GetAsync(int id);
        Task<IEnumerable<TagModel>> GetAllAsync();
        Task<IEnumerable<Tag>> FindRange(IEnumerable<int> tagIds);
        Task<IEnumerable<TagModel>> GetAsync(string name);
    }
}
