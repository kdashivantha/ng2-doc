import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/events.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private route: Router) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists) {
            this.route.navigate(['/404']);
        }
        return eventExists;
    }
}
