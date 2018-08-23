import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events-app',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `
})

// <app-events-list></app-events-list>

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.auth.checkAuthenticationStatus();
  }

  constructor(private auth: AuthService) {
  }
}
