import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee : Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private employeeService : EmployeesService, private router : Router) { }

  ngOnInit(): void {
  }

  addAEmployee(){
    console.log(this.addEmployee);
    this.employeeService.addEmployee(this.addEmployee).subscribe({
      next: (employee) => {
        console.log(employee);
        this.router.navigate(['employees']);
      }
    })
  }
}
