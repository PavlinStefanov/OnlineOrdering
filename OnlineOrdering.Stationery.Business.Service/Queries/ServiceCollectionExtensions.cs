using Microsoft.Extensions.DependencyInjection;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Business.Service.Dto.Management;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Business.Service.Dto.Shared;
using OnlineOrdering.Stationery.Business.Service.Dto.Users;
using OnlineOrdering.Stationery.Business.Service.Queries.Admin;
using OnlineOrdering.Stationery.Business.Service.Queries.Management;
using OnlineOrdering.Stationery.Business.Service.Queries.Orders;
using OnlineOrdering.Stationery.Business.Service.Queries.Shared;
using OnlineOrdering.Stationery.Business.Service.Queries.Users;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddQueryHandlers(this IServiceCollection services)
        {
            // user
           // services.AddTransient<IHandleQuery<AllUsersQuery, IEnumerable<User>>, UserQueryHandler>();
            services.AddTransient<IHandleQuery<UserByIdQuery, UserDto>, UserByIdQueryHandler>();
            
            // order
            services.AddTransient<IHandleQuery<ProductsQuery, IEnumerable<ProductDto>>, ProductsQueryHandler>();
            services.AddTransient<IHandleQuery<CriteriaQuery, CriteriaDto>, CriteriaQueryHandler>();
            services.AddTransient<IHandleQuery<OrdersHistoryQuery, IEnumerable<OrdersHistoryDto>>, OrdersHistoryQueryHandler>();
            
            // shared
            services.AddTransient<IHandleQuery<ValueObjectQuery, ValueObjectDto>, ValueObjectQueryHandler>();

            // management
            services.AddTransient<IHandleQuery<RequestedOrderQuery, IEnumerable<RequestedOrderDto>>, RequestedOrderQueryHandler>();

            // admin
            services.AddTransient<IHandleQuery<GetEmployeeQuery, EmployeeDto>, GetEmployeeQueryHandler>();
            services.AddTransient<IHandleQuery<GetWorkplaceQuery, IEnumerable<WorkplaceDto>>, GetWorkplaceQueryHandler>();
            services.AddTransient<IHandleQuery<FindProductQuery, AdminProductDto>, FindProductQueryHandler>();
            services.AddTransient<IHandleQuery<GetCategoriesByVendorQuery, CategoryResultDto>, GetCategoriesByVendorQueryHandler>();

            //services.AddTransient<IHandleQueryAsync<AllEventsQuery, IEnumerable<Event>>, EventQueryHandler>();
            //services.AddTransient<IHandleQueryAsync<SingleEventByIdQuery, Event>, EventQueryHandler>();

            //services.AddTransient<IHandleQueryAsync<AllUsergroupsQuery, IEnumerable<Usergroup>>, UsergroupQueryHandler>();
            //services.AddTransient<IHandleQueryAsync<SingleUsergroupByIdQuery, Usergroup>, UsergroupQueryHandler>();

            //services.AddTransient<IHandleQueryAsync<AllNewslettersQuery, IEnumerable<Newsletter>>, NewsletterQueryHandler>();
            //services.AddTransient<IHandleQueryAsync<SingleNewsletterByIdQuery, Newsletter>, NewsletterQueryHandler>();

            return services;
        }
    }
}
