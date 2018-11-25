using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class SubCategory
    {
        public SubCategory()
        {
            Products = new HashSet<Product>();
        }
        public int SubCategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
