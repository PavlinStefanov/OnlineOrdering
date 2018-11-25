using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class ProductSearchCriteriaDto
    {
        public int? CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int? VendorId { get; set; }
        public int pageNumber { get; set; }
    }
}
