import { SessionListComponent } from './session-list.component';
import { ISession } from '../../shared/event.model';

describe('SessionListComponenet', () => {
    let componenet: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        componenet = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {

        it('should filter the sessions correctly', () => {

            componenet.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate'},
                { name: 'session 3', level: 'beginner'},
                { name: 'session 2', level: 'intermediate'}
            ];

            componenet.filterBy = 'intermediate';
            componenet.sortBy = 'name';
            componenet.eventId = 3;

            componenet.ngOnChanges();
            expect(componenet.visibaleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {

            componenet.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate'},
                { name: 'session 3', level: 'beginner'},
                { name: 'session 2', level: 'intermediate'}
            ];

            componenet.filterBy = 'all';
            componenet.sortBy = 'name';
            componenet.eventId = 3;

            componenet.ngOnChanges();
            expect(componenet.visibaleSessions[2].name).toBe('session 3');
        });
    });

});
