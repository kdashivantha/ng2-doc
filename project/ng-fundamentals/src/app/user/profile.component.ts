import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    // selector: 'app-name',
    templateUrl: './profile.component.html',
    styles: [`
        em { float:right; color:#E05C65;padding-left: 10px;}
        .error input { background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color:#999; }
        .error :-moz-placeholder { color:#999; }
        .error :ms-input-placeholder { color:#999; }
    `]
    // styleUrls: ['./name.component.scss']
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.firstName = new FormControl(
            this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]
        );
        this.lastName = new FormControl(
            this.auth.currentUser.lastName, Validators.required
        );

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.touched;
    }
    validateFirstName() {
        return this.firstName.valid || this.firstName.touched;
    }
    saveProfile(formValues) {
        this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
