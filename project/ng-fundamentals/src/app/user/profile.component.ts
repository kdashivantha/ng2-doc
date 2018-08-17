import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    // selector: 'app-name',
    templateUrl: './profile.component.html'
    // styleUrls: ['./name.component.scss']
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
        let firstName = new FormControl(
            this.auth.currentUser.firstName, Validators.required
        );
        let lastName = new FormControl(
            this.auth.currentUser.lastName, Validators.required
        );

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
     }

    cancel() {
        this.router.navigate(['events']);
    }
    saveProfile(formValues) {
        this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['events']);
    }
}
