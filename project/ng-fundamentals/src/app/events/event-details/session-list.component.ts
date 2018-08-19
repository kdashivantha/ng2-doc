import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;

    visibaleSessions: ISession[] = [];
    constructor() { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }
    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibaleSessions = this.sessions.slice(0);
        } else {
            this.visibaleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
    ngOnInit(): void { }
}
