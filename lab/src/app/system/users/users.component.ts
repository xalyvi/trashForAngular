import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { isNullOrUndefined } from 'util';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    try {
        this.getUsers();
    } catch (err) {
        console.error(err);
    }
  }

  async getUsers() {
    let users = this.userService.getUsers();
    this.users = (isNullOrUndefined(await users)) ? [] : await users;
  }

  isAdmin(): boolean {
    if (this.authService.getCurUser().isadmin === true)
        return true;
    else
        return false;
  }

  isUserCurrent(user: User): boolean {
    // Можно удалять только администратору и только чужие профили
    if (!this.isAdmin() || this.authService.getCurUser().id === user.id)
        return false;
    
    return true;
  }

  async onDelete(user: User) {
      await this.userService.deleteUserById(user.id);
      this.getUsers();
  }

}
