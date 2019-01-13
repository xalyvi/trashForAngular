import { Injectable } from '@angular/core';
import { IEmployee } from '../../employee/IEmployee';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticated = false;
    private loggedinUser: IEmployee = null;

    constructor(private router: Router) { }

    login(user: IEmployee) {
        this.loggedinUser = user;
        this.isAuthenticated = true;
    }

    logout() {
        this.loggedinUser = null;
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

    getCurUser(): IEmployee {
        return this.loggedinUser;
    }
}
