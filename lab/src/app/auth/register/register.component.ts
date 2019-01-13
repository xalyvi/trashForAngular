import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { isNullOrUndefined } from 'util';
import { User } from 'src/app/shared/models/user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    newUser: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.newUser = new User(null, null, false);
    }

    async onAdd() {
        if (!isNullOrUndefined(this.newUser.name)) {
            try {
                await this.userService.postUser(this.newUser);
            } catch (err) {
                console.error(err);
            }
        }
    }

}
