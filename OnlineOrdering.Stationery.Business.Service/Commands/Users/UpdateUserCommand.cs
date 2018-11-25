using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Dto.Users;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers.Dto;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;


namespace OnlineOrdering.Stationery.Business.Service.Commands.Users
{
    public class UpdateUserCommand : ICommand
    {
        public int Id { get;  set; }
        public UpdateUserDto Value { get; set; }

        public UpdateUserCommand(int id, UpdateUserDto value)
        {
            Id = id;
            Value = value;
        }
    }
}
