using OnlineOrdering.Stationery.Business.DomainService.Implementation.Users.UserDto;
using OnlineOrdering.Stationery.Business.DomainService.Interface;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.DomainService.Implementation.Users
{
    public class UserService : IUserService
    {
        private readonly StationeryContext _stationeryContext;

        public UserService(StationeryContext stationeryContext)
        {
            _stationeryContext = stationeryContext;
        }

        public async Task<ProfileDto> CreateProfile(ProfileRequestDto createProfile)
        {
            var checkForEmployee = _stationeryContext.Users.Where(e => e.CorporateEmail == createProfile.CorporateEmail).FirstOrDefault();

            if (checkForEmployee != null)
            {
                throw new AppException("User exists");
            }

            var newUser = new User
            {
                //UserId = Guid.NewGuid(),
                FirstName = createProfile.FirstName,
                LastName = createProfile.LastName,
                CorporateEmail = createProfile.CorporateEmail,
                //JobPosition = createProfile.JobPosition,
                IsActive = 1,
                UnitId = _stationeryContext.Units.Where(u => u.UnitName == createProfile.UnitName).Select(i => i.UnitId).FirstOrDefault()  
            };

            await _stationeryContext.AddAsync(newUser);
            await _stationeryContext.SaveChangesAsync();

            return GetProfile(newUser.UserId);
        }

        public ProfileDto GetProfile(int userId)
        {
            var profile = (from u in _stationeryContext.Users.Where(u => u.UserId == userId)
                           select new ProfileDto
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
                               JobPosition = u.JobPosition.Name,
                               UnitName = _stationeryContext.Units.Where(r => r.UnitId == u.UnitId)
                                                                  .Select(n => n.UnitName)
                                                                  .FirstOrDefault(),
                               UnitList = _stationeryContext.Units.Where(r => r.Region == u.Unit.Region)
                                                                  .Select(n => n.UnitName).ToList(),
                               CreatedOrders = u.Unit.Orders.Count(), 
                               OrderedProducts = (from o in u.Unit.Orders
                                                  select o.OrderDetails.Select(e => e.ProductId)).Count(), 
                               TotalCosts = (from o in u.Unit.Orders
                                             select o.OrderDetails.Select(e => e.UnitPrice).Sum()).Sum(),
                               MembersList = (from s in u.Unit.Users.Where(n => n.UserId != userId)
                                              select new ProfileTeamMemberDto
                                              {
                                                  MemberId = s.UserId,
                                                  MemberName = string.Format("{0} {1}", s.FirstName, s.LastName),
                                                  ImgName = s.ImgName,
                                                  MemberUnit = s.Unit.UnitName
                                              }).ToList()
                           }).FirstOrDefault();

            return profile;
        }

        public void UpdateProfile(UpdateProfileDto updateProfile, int userId)
        {
            var checkForUser = _stationeryContext.Users.FindAsync(userId);
            if (checkForUser == null)
            {
                throw new AppException("User not found");
            }

           // _stationeryContext.Users.Update(checkForUser);
        }
    }
}
