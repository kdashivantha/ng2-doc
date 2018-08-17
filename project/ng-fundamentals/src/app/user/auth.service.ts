import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    /**
     * @param  {string} userName
     * @param  {string} password
     */
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName : userName,
            firstName:  'Jhon',
            lastName: 'Papa'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
