using Microsoft.AspNetCore.Mvc;
using RAR.Bussiness.Interfaces;

namespace RARbackend.MVC.Controllers
{
    public class RegisterUserController : Controller
    {
        private readonly IRegisterBussiness _registerBussiness;   
        public RegisterUserController(IRegisterBussiness registerBussiness )
        {
            _registerBussiness=registerBussiness;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
