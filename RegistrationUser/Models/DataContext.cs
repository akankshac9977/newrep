using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RegistrationUser.Models
{
    public class DataContext : DbContext
    {
        public virtual DbSet<Users> users { get; set; }
        public DataContext() : base("MyConnectionString")
        {

        }
    }
}