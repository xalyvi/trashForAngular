import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticated = false;
    private loggedinUser: User = null;

    constructor(private router: Router) { }

    login(user: User) {
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

    getCurUser(): User {
        return this.loggedinUser;
    }
}
