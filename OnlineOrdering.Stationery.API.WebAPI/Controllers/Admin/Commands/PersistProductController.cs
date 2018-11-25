using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Admin.Commands
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class PersistProductController : Controller
    {
    }
}