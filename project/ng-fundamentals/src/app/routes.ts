import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-details/event-details.component';


// import { PageNotFoundComponent } from './';

export const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailComponent },
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

