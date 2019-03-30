using IRzeszow.Model.Tag.Request;
using IRzeszow.Model.Tag.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Service.Interfaces
{
    public interface ITagService
    {
        Task<IEnumerable<TagModel>> GetAllAsync();
        Task<TagModel> GetAsync(int id);
        Task<IEnumerable<TagModel>> GetAsync(string name);
        Task CreateAsync(CreateTagDto value);
    }
}
