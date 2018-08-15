import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {
    @Input() event;
    constructor() { }

    ngOnInit(): void { }
}
