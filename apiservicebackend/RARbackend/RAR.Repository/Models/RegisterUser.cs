using System;
using System.Collections.Generic;

#nullable disable

namespace RAR.Repository.Models
{
    public partial class RegisterUser
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
