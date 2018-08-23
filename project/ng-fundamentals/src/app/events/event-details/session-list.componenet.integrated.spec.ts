/*
 * Testing a simple Angular 2 component
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#simple-component-test
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { DurationPipe } from '../../shared/duration.pipe';


describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>;
    let comp: SessionListComponent;
    let elemenet: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {};
        let mockVoterService = {};

        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService},
                { provide: VoterService, useValue: mockVoterService}
            ],
            schemas: []
        })
        .compileComponents();
    }));

    beforeEach(() => {
            fixture = TestBed.createComponent(SessionListComponent);
            comp = fixture.componentInstance;
            debugEl = fixture.debugElement;
            elemenet  = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {


            comp.sessions = [{
                id: 3,
                name: 'Session 1',
                presenter: 'Joe',
                duration: 1,
                level: 'beginner',
                abstract: 'abstract',
                voters: [ 'john', 'bob']
            }];

            comp.filterBy = 'all';
            comp.sortBy = 'name';
            comp.eventId = 4;

            
            comp.ngOnChanges();
            fixture.detectChanges();

            expect(elemenet.querySelector('div[well-title]').textContent)
            .toContain('Session 1');
        });
    });
});
