using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.Entities.Models
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
