import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event.model';
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-events-list',
    templateUrl: 'events-list.component.html'
    // ,
    // styles: [``]
})
export class EventsListComponent implements OnInit {
    eventModel: Event;
    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.eventModel =  new Event(2, 'amith');
     }

    events: any;

    handleChildEventClicked(data) {
         console.log('received', data);
     }


    ngOnInit(): void {
      // this.events = this.eventService.getEvents();
      // this.eventService.getEvents().subscribe(events => { this.events = events; });
      this.events =  this.route.snapshot.data['events'];
     }
}
