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
    @Input() sortBy: string;

    visibaleSessions: ISession[] = [];
    constructor() { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibaleSessions.sort(sortByNameAsc) : this.visibaleSessions.sort(sortByVotesDesc);
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


function sortByNameAsc (s1: ISession, s2: ISession) {
    if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
