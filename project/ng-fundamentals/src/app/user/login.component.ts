import { Component, OnInit } from '@angular/core';

@Component({
    // selector: 'app-name',
    templateUrl: './login.component.html',
    // styleUrls: ['./name.component.scss']
})
export class LoginComponent implements OnInit {
    userName: string;
    passowrd: string;

    constructor() { }

    ngOnInit(): void { }

    login(loginFormValues) {
        console.log(loginFormValues);
    }
}
