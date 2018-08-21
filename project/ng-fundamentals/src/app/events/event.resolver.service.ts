import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventResolverService implements Resolve<any> {
    constructor(private eventService: EventService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        // return this.eventService.getEvents().pipe(map(events => events));
        return this.eventService.getEvent(route.params['id']);
    }
}
