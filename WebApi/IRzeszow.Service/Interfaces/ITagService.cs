using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Service.Interfaces
{
    public interface ITagService
    {
        Task<object> GetAll();
        Task<object> Get(int id);
    }
}
