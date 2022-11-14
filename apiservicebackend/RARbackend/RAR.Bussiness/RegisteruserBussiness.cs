using RAR.Bussiness.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace RAR.Bussiness
{
  
    public class RegisteruserBussiness : IRegisterBussiness
    {
        private readonly IRegisterUserrepository repository;    
        public RegisteruserBussiness()
        {

        }
    }
}
