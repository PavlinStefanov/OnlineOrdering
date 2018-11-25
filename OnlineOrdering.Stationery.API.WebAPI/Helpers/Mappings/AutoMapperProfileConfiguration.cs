using AutoMapper;
using OnlineOrdering.Stationery.API.WebAPI.Model.Admin;
using OnlineOrdering.Stationery.API.WebAPI.Model.Management;
using OnlineOrdering.Stationery.API.WebAPI.Model.Order;
using OnlineOrdering.Stationery.API.WebAPI.Model.User;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Business.Service.Dto.Management;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers.Dto;

namespace OnlineOrdering.Stationery.API.WebAPI.Helpers.Mappings
{
    public class AutoMapperProfileConfiguration : Profile
    {
        public AutoMapperProfileConfiguration()
        {
            // user mapping
            var userUpdateMap = CreateMap<UpdateUserModel, UpdateUserDto>();

            // order mapping
            var orderCriteriaMap = CreateMap<ProductSearchCriteriaModel, ProductSearchCriteriaDto>();
            var createOrderMap = CreateMap<CreateOrderModel, AddOrderDto>();
            var createProductMap = CreateMap<CreateProductModel, AddProductDto>();
            var historySearchMap = CreateMap<OrderSearchCriteriaModel, OrderSearchCriteriaDto>();

            // management mapping
            var setProductMap = CreateMap<SetProductModel, SetProductDto>();
            var setOrderMap = CreateMap<SetOrderModel, SetOrderDto>();

            // admin mapping
            var persistMap = CreateMap<PersistEmployeeModel, PersistEmployeeDto>();
        }
    }
}
