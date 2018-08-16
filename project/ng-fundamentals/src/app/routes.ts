import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list-resolver.service';


// import { PageNotFoundComponent } from './';

export const routes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService} },
    { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: '**', redirectTo: '/events', pathMatch: 'full'}

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class RoutingModule {}

