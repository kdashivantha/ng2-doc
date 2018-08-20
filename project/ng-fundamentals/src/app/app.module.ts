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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { restrictedWords } from './shared/restricted-words.validator';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { TOASTR_TOKEN, Toastr } from './shared/toastr2.service';

declare let toastr: Toastr;
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventItemComponent,
    EventDetailComponent,
    EventCreateComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    ToastrService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: EventRouteActivator,
      useClass: EventRouteActivator
    },
    // EventRouteActivator,
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
