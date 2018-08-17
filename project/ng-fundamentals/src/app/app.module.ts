import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventItemComponent } from './events/event-item.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './shared/toastr.service';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventItemComponent,
    EventDetailComponent,
    EventCreateComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you relly want to cancel?');
  }
  return true;
}
