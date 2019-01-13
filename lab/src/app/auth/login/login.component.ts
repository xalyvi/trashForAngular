import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { isNullOrUndefined } from 'util';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    users: User[];
    selectedUser: User;

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) { }

    async ngOnInit() {
        try {
            let users = this.userService.getUsers();
            this.users = (isNullOrUndefined(await users)) ? [] : await users;
        } catch (err) {
            console.error(err);
        }
    }

    onSelect() {
        this.authService.login(this.selectedUser);
        this.router.navigate(['/system/notes']);
    }

}
