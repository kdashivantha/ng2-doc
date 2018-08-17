import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    // selector: 'app-name',
    templateUrl: './login.component.html',
    // styleUrls: ['./name.component.scss']
})
export class LoginComponent implements OnInit {
    userName: string;
    passowrd: string;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void { }

    login(loginFormValues) {
        // console.log(loginFormValues);
        this.authService.loginUser(loginFormValues.userName, loginFormValues.passowrd);

        // route to events page
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
