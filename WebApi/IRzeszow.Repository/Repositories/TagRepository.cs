using IRzeszow.Data;
using IRzeszow.Data.Model;
using IRzeszow.Model.Tag.Request;
using IRzeszow.Model.Tag.Response;
using IRzeszow.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Repositories
{
    public class TagRepository : ITagRepository
    {
        private IRzeszowDbContext DbContext { get; set; }
        public TagRepository(IRzeszowDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task CreateAsync(CreateTagDto value)
        {
            await DbContext.Tags.AddAsync(new Tag
            {
                Name = value.Name
            });

            await DbContext.SaveChangesAsync();
        }

        public async Task<TagModel> GetAsync(int id)
        {
            return await DbContext.Tags.Where(t => t.Id == id).Select(t => new TagModel
            {
                Id = t.Id,
                Name = t.Name
            }).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<TagModel>> GetAllAsync()
        {
            return await DbContext.Tags.Select(t => new TagModel
            {
                Id = t.Id,
                Name = t.Name
            }).ToListAsync();
        }

        public async Task<IEnumerable<Tag>> FindRange(IEnumerable<int> tagIds)
        {
            return await DbContext.Tags.Where(t => tagIds.Contains(t.Id)).ToListAsync();
        }

        public async Task<IEnumerable<TagModel>> GetAsync(string name)
        {
            return await DbContext.Tags.Where(t => t.Name.Contains(name)).Select(t => new TagModel
            {
                Id = t.Id,
                Name = t.Name
            }).ToListAsync();
        }
    }
}
