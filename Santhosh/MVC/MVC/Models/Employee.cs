//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MVC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    public partial class Employee
    {
        public int EmpId { get; set; }
        [Required(ErrorMessage ="DeptId is required")]
        public int DeptId { get; set; }
        [Required(ErrorMessage ="EmpName is required")]
        public string EmpName { get; set; }
        [Required(ErrorMessage ="Emp Salary is required")]
        public decimal EmpSalary { get; set; }
    
        public virtual Department Department { get; set; }
    }
}
