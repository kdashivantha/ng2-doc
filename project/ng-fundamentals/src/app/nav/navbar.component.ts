import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../events/shared/events.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size:15px;}
    #searchForm {margin-right:100px;}
    @media(max-width: 1200px){#searchForm {display:none}}
    li > a.active { color: #F97924}
    `]
})
export class NavBarComponent implements OnInit {
    searchTerm: string = '';
    foundSessions: ISession[];
    constructor(public auth: AuthService, private eventService: EventService) { }

    ngOnInit(): void { }

    searchSessions (searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe
        (sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }
}
