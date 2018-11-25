using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class CriteriaDto
    {
        public List<CategoryDto> CategoryList { get; set; }
        public List<SubCategoryDto> SubCategoryList { get; set; }
        public List<VendorDto> VendorList { get; set; }
    }
}
    