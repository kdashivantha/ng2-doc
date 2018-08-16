import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event.model';
import { EventService } from './shared/events.service';

@Component({
    selector: 'app-events-list',
    templateUrl: 'events-list.component.html'
    // ,
    // styles: [``]
})
export class EventsListComponent implements OnInit {
    eventModel: Event;
    constructor(private eventService: EventService) {
        this.eventModel =  new Event(2, 'amith');
     }

    events: any[];

    handleChildEventClicked(data) {
         console.log('received', data);
     }


    ngOnInit(): void {
      this.events = this.eventService.getEvents();
     }
}
