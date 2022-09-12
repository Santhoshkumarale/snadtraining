import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];
  optionValue: number = 1;
  empStatus = true;
  checkAllStatus = false;
  employee = {} as IEmployee;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      { empNumber: 101, empName: 'Sathesh', empSalary: 65000, empAddress: 'Hyderabad', isSelected: false },
      { empNumber: 102, empName: 'Rama', empSalary: 25000, empAddress: 'Hyderabad', isSelected: false },
      { empNumber: 103, empName: 'Krishna', empSalary: 85000, isSelected: false },
      { empNumber: 104, empName: 'Shiva', empSalary: 45000, empAddress: 'Hyderabad', isSelected: false },
      { empNumber: 105, empName: 'Mohan', empSalary: 55000, isSelected: false }
    ];
  }

  public selectTab(val: number) {
    this.optionValue = val;
  }

  public checkAll() {
    if (this.checkAllStatus) {
      this.employees = this.employees.map((emp) => {
        emp.isSelected = true;
        return emp;
      });
    }
    else {
      this.employees = this.employees.map((emp) => {
        emp.isSelected = false;
        return emp;
      });
    }
  }

  public checkStatus() {
    let checkedEmployees = this.employees.filter((emp) => {
      if (emp.isSelected)
        return emp;
      else
        return null;
    });
    if (checkedEmployees.length == this.employees.length)
      this.checkAllStatus = true;
    else
      this.checkAllStatus = false;
  }

  public addEmployee(f: NgForm) {
    this.employees.push(this.employee);
    alert("Employee Added");
    this.employee = {} as IEmployee;
    f.resetForm();
  }
}