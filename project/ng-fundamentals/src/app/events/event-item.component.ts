import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html',
    styles: [
        `
        .bold {font-weight:bold;}
        .green {color:#003300;}
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

    getStartTimeCSS() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart };

        // same as
        // if (this.event && this.event.time === '8:00 am') {
        //     return 'green bold';
        // } else {
        //     return '';
        // }
    }
}
