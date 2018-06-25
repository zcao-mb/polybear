using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ServerApp.Models;

namespace ServerApp
{
    public static class RegisterServices
    {
        public static void AddMyServices(this IServiceCollection services, IConfiguration configuration)
        {
            // add database context
            services.AddDbContext<ProjectContext>(options => options.UseSqlServer(configuration.GetConnectionString("PolyBearDatabase")));

            services.AddTransient(typeof(Services.ProjectService));
        }
    }
}
