
import { BaseApi } from '../core/base-api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseApi {

    options: HttpHeaders;

    constructor(
        public http: HttpClient
    ) {
        super(http);
        this.options = new HttpHeaders();
        this.options = this.options.set('Content-Type', 'application/json');
    }

    async getUsers() {
        return this.get('users', this.options).toPromise();
    }

    async postUser(data: User) {
        return this.post('users', data, this.options).toPromise();
    }

    async putUserById(id, data: User) {
        return this.put('users/' + id, data, this.options).toPromise();
    }

    async deleteUserById(id) {
        return this.delete('users/' + id, this.options).toPromise();
    }

}
