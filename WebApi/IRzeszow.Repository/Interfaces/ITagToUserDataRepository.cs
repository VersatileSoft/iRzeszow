using IRzeszow.Data.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRzeszow.Repository.Interfaces
{
    public interface ITagToUserDataRepository
    {
        Task CreateAsync(UserData userData, Tag tag);
    }
}
