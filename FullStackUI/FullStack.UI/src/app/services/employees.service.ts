import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl : string = environment.baseApiUrl
  constructor(private HttpClient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
    return this.HttpClient.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }

  addEmployee(addAEmployee : Employee) : Observable<Employee> {
    addAEmployee.id = '00000000-0000-0000-0000-000000000000';
    return this.HttpClient.post<Employee>(this.baseApiUrl + '/api/employees', addAEmployee);
  }

  getParticularEmployee(id: string) : Observable<Employee> {
    return this.HttpClient.get<Employee>(this.baseApiUrl+'/api/employees/'+id)
  }

  updateEmployee(id : string, updateEmployeeData : Employee) : Observable<Employee> {
    return this.HttpClient.put<Employee>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeData);
  }

  deleteEmployee(id: string) : Observable<Employee> {
    debugger;
    return this.HttpClient.delete<Employee>(this.baseApiUrl+ "/api/employees/" + id);
  }
}
