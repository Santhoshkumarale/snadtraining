using Microsoft.AspNetCore.Mvc;
using RAR.Bussiness.Interfaces;

namespace RARbackend.MVC.Controllers
{
    public class RegisterController1 : Controller
    {
        private readonly IRegisterBusiness _registerBusiness;
        public RegisterController1( IRegisterBusiness registerBusiness  )
        {               
            _registerBusiness= registerBusiness;

        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
