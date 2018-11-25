using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class Product
    {
        public Product()
        {
            OrderDetails = new HashSet<OrderDetails>();
        }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int? ArticuleId { get; set; }
        public decimal UnitPrice { get; set; }
        public string Measure { get; set; }
        public byte[] ImageContent { get; set; }
        public string ImageType { get; set; }
        public string ImageURL { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public Guid? ImageId { get; set; }
        public int SubCategoryId { get; set; }
        public SubCategory SubCategory { get; set; }
        public int VendorId { get; set; }
        public Vendor Vendor { get; set; }
        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
