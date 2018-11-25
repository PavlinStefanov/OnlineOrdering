using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.Entities.Models
{
    public class Vendor
    {
        public Vendor()
        {
            Products = new HashSet<Product>();
        }
        public int VendorId { get; set; }
        public string VendorName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
