using MVC.Models;
using MVC.Viewmodels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class HomeController : Controller
    {
        sandbEntities context=new sandbEntities();
        public ActionResult Index()
        {
            //context.Configuration.LazyLoadingEnabled = false;
            
            List<Employee> employees = context.Employees.ToList();
            Employee emp = (from a in context.Employees where a.EmpId == 1 select a).SingleOrDefault();       //LINQ
            emp = context.Employees.Where(x => x.EmpId ==1).SingleOrDefault();    //LAMBDA

            string EmpName = (from a in context.Employees where a.EmpId == 1 select a.EmpName).SingleOrDefault();
            EmpName = context.Employees.Where(x => x.EmpId == 1).Select(x => x.EmpName).SingleOrDefault();
            List<Employee> list = (from a in context.Employees where a.DeptId == 1 select a).ToList();
            list=context.Employees.Where(x => x.DeptId == 1).ToList();
            decimal maxSalary = context.Employees.Max(x => x.EmpSalary);
            decimal minSalary = context.Employees.Min(x => x.EmpSalary);
            decimal totalSalary = context.Employees.Sum(x => x.EmpSalary);

            employees = context.Employees.OrderBy(x => x.EmpSalary).ToList();
            employees = context.Employees.OrderByDescending (x => x.EmpSalary).ToList();

            var empList = (from a in context.Employees
                           join b in context.Departments on a.DeptId equals b.DeptId
                           select new DeptEmp
                           {
                               DeptId = a.DeptId,
                               DeptName = b.DeptName,
                               DeptLocation = b.DeptLocation,
                               EmpId = a.EmpId,
                               EmpName = a.EmpName,
                               EmpSalary= a.EmpSalary
                           }).ToList();

            return View(employees);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
     
        [HttpGet]
        public ActionResult Create()
        {

            return View();
        }
    }
}