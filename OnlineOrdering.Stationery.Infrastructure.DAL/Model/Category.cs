using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class Category
    {
        public Category()
        {
            SubCategories = new HashSet<SubCategory>();
        }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<SubCategory> SubCategories { get; set; }
    }
}
