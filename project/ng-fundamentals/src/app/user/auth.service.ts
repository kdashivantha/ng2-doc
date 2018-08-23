import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }
    currentUser: IUser;
    /**
     * @param  {string} userName
     * @param  {string} password
     */
    loginUser(userName: string, password: string) {
        // this.currentUser = {
        //     id: 1,
        //     userName : userName,
        //     firstName:  'Jhon',
        //     lastName: 'Papa'
        // };

        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

        return this.http.post('/api/login', loginInfo, options)
        .pipe(
            tap(data => {
                this.currentUser = <IUser>data['user'];
            })
        )
        .pipe(
            catchError(err => {
                return of(false);
            })
        );
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
        // .subscribe(data => {
        //     if (data instanceof Object) {
        //         this.currentUser = <IUser>data;
        //     }
        // });
        .pipe( tap(data => {
            if (data instanceof Object) {
                this.currentUser = <IUser>data;
            }
        }))
        .subscribe();
    }
    updateCurrentUser(firstName: string, lastName: string) {
        this. currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
