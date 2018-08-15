import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event.model';

@Component({
    selector: 'app-events-list',
    templateUrl: 'events-list.component.html'
    // ,
    // styles: [``]
})
export class EventsListComponent implements OnInit {
    event: Event;
    constructor() {

        this.event =  new Event(2, 'amith');
     }

    ngOnInit(): void { }
}
