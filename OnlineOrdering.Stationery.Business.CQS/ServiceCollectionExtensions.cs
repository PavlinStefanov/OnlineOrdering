using Microsoft.Extensions.DependencyInjection;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.CQRS
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCqsEngine(this IServiceCollection services)
        {
            services.AddScoped<IQueryProcessor, QueryProcessor>();
            services.AddScoped<ICommandDispatcher, CommandDispatcher>();

            return services;
        }


        public static IServiceCollection AddCqsEngine(this IServiceCollection services, Action<IServiceCollection> subRegister)
        {
            services.AddScoped<IQueryProcessor, QueryProcessor>();
            services.AddScoped<ICommandDispatcher, CommandDispatcher>();

            subRegister(services);

            return services;
        }
    }
}
