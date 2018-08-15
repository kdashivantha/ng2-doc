import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html',
    styles: [
        `
        .some-bold {font-weight:bold;}
        `
    ]
})
export class EventItemComponent implements OnInit {
    @Input()
    event: any;
    @Output()
    eventClick = new EventEmitter();
    constructor() { }

    handleClickMe() {
        this.eventClick.emit('from-child ' + this.event.name);
        console.log('clicked');
    }

    logFooFromParent() {
        console.log('foo from parent');
    }
    ngOnInit(): void { }
}
