using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.API.WebAPI.Model.Order
{
    public class ProductSearchCriteriaModel
    {
        public int? CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int? VendorId { get; set; }
        public int pageNumber { get; set; }
    }
}
