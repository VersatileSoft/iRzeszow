using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace IRzeszow.Data
{
    public class IRzeszowDbContext : DbContext
    {
        public IRzeszowDbContext(DbContextOptions<IRzeszowDbContext> options) : base(options) { }
    }
}
