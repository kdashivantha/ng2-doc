import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../shared/event.model';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-details.component.html',
    styles: [`
    .container {padding-left:20px; padding-right:20px;}
    .event-image {height:100px;}
    a {cursor:pointer;}
    `]
})
export class EventDetailComponent implements OnInit {
    event: IEvent;
    inAddMode = false;
    filterBy: string = "all";
    sortBy: string = "name";
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.resetState();
        });

       // this.event = this.eventService.getEvent
       // (+this.route.snapshot.params['id']);
    }

    resetState() {
        this.inAddMode = false;
        this.filterBy = 'all';
        this.sortBy = 'name';
    }
    addSession() {
        this.inAddMode = true;
    }

    saveCreateSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.inAddMode = false;
    }

    cancelCreateSession() {
        this.inAddMode = false;
    }
}
