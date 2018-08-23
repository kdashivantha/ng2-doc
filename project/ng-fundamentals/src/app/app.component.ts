import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events-app',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  `
})

// <app-events-list></app-events-list>

export class AppComponent implements OnInit {
  title: string;

  ngOnInit(): void {
    this.auth.checkAuthenticationStatus();
  }

  constructor(private auth: AuthService) {
  }
}
