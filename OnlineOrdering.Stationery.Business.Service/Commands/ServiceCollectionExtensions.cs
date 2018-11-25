using Microsoft.Extensions.DependencyInjection;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Commands.Management;
using OnlineOrdering.Stationery.Business.Service.Commands.Orders;
using OnlineOrdering.Stationery.Business.Service.Commands.Users;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<ICommandHandler<UpdateUserCommand>, UpdateUserCommandHandler>();
            services.AddScoped<ICommandHandler<CreateOrderCommand>, CreateOrderCommandHandler>();
            services.AddScoped<ICommandHandler<SetProductCommand>, SetProductCommandHandler>();
            services.AddScoped<ICommandHandler<SetOrderCommand>, SetOrderCommandHandler>();
            services.AddScoped<ICommandHandler<AddToLinkCommand>, AddToLinkCommandHandler>();
            services.AddScoped<ICommandHandler<CompleteOrderCommand>, CompleteOrderCommandHandler>();

            return services;
        }
    }
}
