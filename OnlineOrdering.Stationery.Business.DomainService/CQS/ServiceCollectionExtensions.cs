using Microsoft.Extensions.DependencyInjection;
using OnlineOrdering.Stationery.Business.DomainService.CQS.Command;
using OnlineOrdering.Stationery.Business.DomainService.CQS.Query;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.DomainService.CQS
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

        public static IServiceCollection AddQueryHandlers(this IServiceCollection services)
        {
            //services.AddTransient<IHandleQueryAsync<AllUnitsQuery, IEnumerable<Unit>>, UnitsQueryHandler>();
            //services.AddTransient<IHandleQueryAsync<UnitByIdQuery, Unit>, UnitsQueryHandler>();
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
