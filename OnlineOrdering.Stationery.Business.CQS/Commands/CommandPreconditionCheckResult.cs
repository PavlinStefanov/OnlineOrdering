using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.CQRS.Commands
{
    public class CommandPreconditionCheckResult
    {
        public CommandPreconditionCheckResult()
        {
            IsValid = true;
            ValidationMessages = new List<string>();
        }

        public bool IsValid { get; set; }
        public IList<string> ValidationMessages { get; set; }
    }
}
