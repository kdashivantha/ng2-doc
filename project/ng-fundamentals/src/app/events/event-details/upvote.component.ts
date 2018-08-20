import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-session-upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                <i [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
    @Input() count: number;
    // @Input() voted: boolean;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
     }
    @Output() vote = new EventEmitter();
    private iconColor: string;
    constructor() { }

    onClick() {
     this.vote.emit({});
    }
    ngOnInit(): void { }
}
