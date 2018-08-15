import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event.model';

@Component({
    selector: 'app-events-list',
    templateUrl: 'events-list.component.html'
    // ,
    // styles: [``]
})
export class EventsListComponent implements OnInit {
    eventModel: Event;
    constructor() {

        this.eventModel =  new Event(2, 'amith');
     }

    ngOnInit(): void { }
}
