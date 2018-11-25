using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using OnlineOrdering.Stationery.API.WebAPI.Helpers.Mappings;
using OnlineOrdering.Stationery.Business.CQRS;
using OnlineOrdering.Stationery.Business.Service.Commands;
using OnlineOrdering.Stationery.Business.Service.Queries;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //var connection = @"data source=WSBPSOF145;initial catalog=StationeryOrdering;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework";
            var connection = @"data source=DESKTOP-CEO4LR9;initial catalog=StationeryOrdering;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework";
            services.AddDbContext<StationeryContext>(
              options => options.UseSqlServer(connection, x => x.MigrationsAssembly("OnlineOrdering.Stationery.Infrastructure.DAL")
             ));

            //services.TryAddTransient<IUserService, UserService>();
            services.AddCqsEngine();
            services.AddQueryHandlers();
            services.AddCommandHandlers();

            var config = new MapperConfiguration(cft =>
            {
                cft.AddProfile(new AutoMapperProfileConfiguration());
            });
            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
            services.AddAutoMapper();

            //services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p =>
                {
                    p.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
            services.AddMvc();
        }

        private void InitializeDatabase(IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                scope.ServiceProvider.GetRequiredService<StationeryContext>().Database.Migrate();
                //scope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();
            }
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            InitializeDatabase(app);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                            async context =>
                            {
                                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                                var error = context.Features.Get<IExceptionHandlerFeature>();
                                //if (error != null)
                                //{
                                //    context.Response.AddApplicationError(error.Error.Message);
                                //    await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                                //}
                            });
              });

            app.UseAuthentication();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors("AllowAll");
            app.UseMvc();
        }

       
    }
}
