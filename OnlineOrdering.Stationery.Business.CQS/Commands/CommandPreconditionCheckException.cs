﻿using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.CQRS.Commands
{
    public class CommandPreconditionCheckException : Exception
    {
        public CommandPreconditionCheckException()
        {
        }

        public CommandPreconditionCheckException(IList<string> validationMessages)
        {
            ValidationMessages = validationMessages;
        }

        public IList<string> ValidationMessages { get; private set; }
    }
}
