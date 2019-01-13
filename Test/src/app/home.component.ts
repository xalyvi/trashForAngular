import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee/IEmployee';
import { EmployeeService } from './employee/employee.service';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: IEmployee[];
  selectedUser: IEmployee;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.employeeService.getEmployees().subscribe(
      (listEmployess) => this.users = listEmployess,
      (err) => console.log(err)
    )
  }

  onSelect() {
    this.authService.login(this.selectedUser);
    this.router.navigate(['/employees']);
  }

}
