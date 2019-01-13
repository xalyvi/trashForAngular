import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { Router } from '@angular/router'
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees: IEmployee[];

  constructor(private _employeeService: EmployeeService,
              private authService: AuthService,
              private _router: Router) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn())
      this._router.navigate(['/login']);
    this._employeeService.getEmployees().subscribe(
      (listEmployess) => this.employees = listEmployess,
      (err) => console.log(err)
    );
  }

  editButtonClick(employeeId: number) {
    this._router.navigate(['/employees/edit', employeeId]);
  }

}
