import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    // {
    //   id: 1,
    //   name: 'A',
    //   email: 'A@gmail.com',
    //   phone: 9876543210,
    //   salary: 100000,
    //   department: 'Sales'
    // },
    // {
    //   id: 2,
    //   name: 'B',
    //   email: 'B@gmail.com',
    //   phone: 9876543211,
    //   salary: 200000,
    //   department: 'Sales'
    // },
    // {
    //   id: 3,
    //   name: 'C',
    //   email: 'C@gmail.com',
    //   phone: 9876543212,
    //   salary: 300000,
    //   department: 'Sales'
    // },
  ];
  constructor(private employeeService : EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
