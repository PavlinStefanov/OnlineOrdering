using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Admin
{
    public class CategoryResultDto
    {
        public List<VendorDto> Vendors { get; set; }
        public List<CategoryDto> Categories { get; set; }
    }

    public class VendorDto
    {
        public int VendorId { get; set; }
        public string Name { get; set; }
    }

    public class CategoryDto
    {
        public int CatId { get; set; }
        public string CatName { get; set; }
        public List<SubCatDto> SubCats { get; set; }
    }

    public class SubCatDto
    {
        public int SubId { get; set; }
        public string SubName { get; set; }
    }

}
