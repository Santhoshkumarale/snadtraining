import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [] as IEmployee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      { empId: 101, empName: 'Sathesh', empSalary: 85000, empAddress: "Hyderabad" },
      { empId: 102, empName: 'Rama', empSalary: 65000, empAddress: "Chennai" },
      { empId: 103, empName: 'Krishna', empSalary: 75000, empAddress: "Vijayawada" },
      { empId: 104, empName: 'Mohan', empSalary: 55000, empAddress: "Pune" }
    ];
  }

}
