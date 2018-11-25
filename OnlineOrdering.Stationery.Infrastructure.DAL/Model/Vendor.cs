using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
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
