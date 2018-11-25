

using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers.Dto;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class User
    {
        /// <summary>
        /// for user domain
        /// </summary>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <param name="userName"></param>
        /// <param name="jobId"></param>
        /// <param name="unitId"></param>
        public void Set(string firstName, string lastName, string userName, int jobId, int unitId)
        {
            FirstName = firstName;
            LastName = lastName;
            UserName = string.IsNullOrEmpty(userName) ? UserName : userName;
            JobPositionId = jobId;
            UnitId = unitId;
            IsActive = true;
        }
        /// <summary>
        /// update/or create employee for admin domain
        /// </summary>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <param name="jobId"></param>
        /// <param name="unitId"></param>
        public void Set(string firstName, string lastName, int jobId, int unitId)
        {
            FirstName = firstName;
            LastName = lastName;
            JobPositionId = jobId;
            UnitId = unitId;
            IsActive = true;
        }
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string CorporateEmail { get; set; }
        public byte[] ProfileImage { get; set; }
        public byte[] BackGroundImage { get; set; }
        public bool IsActive { get; set; }
        public string ImgName { get; set; }
        public int? ManagerId { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public int UnitId { get; set; }
        public Unit Unit { get; set; }
        public int JobPositionId { get; set; }
        public JobPosition JobPosition { get; set; }
    }
}
