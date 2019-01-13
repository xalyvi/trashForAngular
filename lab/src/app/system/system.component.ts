import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(
      private authService: AuthService
    ) { }

  ngOnInit() {
  }

  logout() {
      this.authService.logout();
  }

}
