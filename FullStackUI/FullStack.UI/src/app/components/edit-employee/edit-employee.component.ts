import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails : Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  } 

  constructor(private route : ActivatedRoute, private employeeService : EmployeesService, private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.employeeService.getParticularEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }

  goBackHome() {
    debugger;
    this.router.navigate(['employees']);
  }

  deleteEmployee(id : string) {
    debugger;
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response)=>{
        this.router.navigate(['employees']);
      }
    })
  }
}
