using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.API.WebAPI.Model.User;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Commands.Users;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers.Dto;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Users.Commands
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class UpdateUserController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public UpdateUserController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        // GET api/ordering/updateUser
        [HttpPost("updateUser")]
        public IActionResult updateUserAsync([FromBody] UpdateUserModel model)
        {
            try
            {
                int id = 17;
                var userMap = _mapper.Map<UpdateUserDto>(model);

                var command = new UpdateUserCommand(id, userMap);
                _commandDispatcher.DispatchCommand(command);

                return new OkObjectResult("ОК");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}