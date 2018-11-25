using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Shared;
using OnlineOrdering.Stationery.Business.Service.Dto.Users;
using OnlineOrdering.Stationery.Business.Service.Queries.Shared;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Users
{
    public class UserByIdQueryHandler : IHandleQuery<UserByIdQuery, UserDto>
    {
        private readonly StationeryContext _context;

        public UserByIdQueryHandler(StationeryContext context)
        {
            _context = context;
        }

        public UserDto Execute(UserByIdQuery query)
        {
            return _context.Users.Where(x => x.UserId == query.Id)
                                       .Select(u => new UserDto
                                       {
                                           Id = u.UserId,
                                           CompanyName = "Unicredit Group Ltd.",
                                           UnitAddress = u.Unit.Address,
                                           Location = u.Unit.Location,
                                           Region = u.Unit.Region,
                                           PhoneNumber = u.Unit.PhoneNumber,
                                           FirstName = u.FirstName,
                                           LastName = u.LastName,
                                           UserName = u.UserName,
                                           ImgName = u.ImgName,
                                           Email = u.CorporateEmail,
                                           CreatedOrders = u.Unit.Orders.Count(),
                                           OrderedProducts = u.Unit.Orders.Select(x => x.OrderDetails.Select(c => c.Quantity).Count()).Sum(),
                                           TotalCosts = u.Unit.Orders.Select(x => x.TotalAmount).Sum(),
                                           MembersList = GetMembers(u.Unit.Users, u.UserId)
                                       }).FirstOrDefault();
        }
        private List<TeamMemberDto> GetMembers(IEnumerable<User> users, int id)
        {
            return users.Where(n => n.UserId != id)
                        .Select(m => new TeamMemberDto
                        {
                            MemberId = m.UserId,
                            MemberName = string.Format("{0} {1}", m.FirstName, m.LastName),
                            ImgName = m.ImgName,
                            MemberUnit = m.Unit.UnitName
                        }).ToList();
        }
    }
}
