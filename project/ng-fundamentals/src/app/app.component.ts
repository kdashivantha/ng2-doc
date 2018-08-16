import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `
})

// <app-events-list></app-events-list>

export class AppComponent {
  title = 'ng-fundamentals';
}
