import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private authService: AuthService
  ) { }

  user = this.authService.isLoggedIn();

  logout() {
    this.authService.logout();
  }

}