import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/events.service';

@Component({
    templateUrl: './event-create.component.html',
    styles: [`
        em { float:right; color:#E05C65;padding-left: 10px;}
        .error input { background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color:#999; }
        .error :-moz-placeholder { color:#999; }
        .error :ms-input-placeholder { color:#999; }
    `]
})
export class EventCreateComponent implements OnInit {
    newEvent;
    // tslint:disable-next-line:no-inferrable-types
    isDirty: boolean = true;
    constructor(private route: Router, private eventService: EventService) { }

    ngOnInit(): void { }

    cancel() {
        this.route.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.route.navigate(['/events']);
        });
    }
}
