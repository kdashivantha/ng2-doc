import { Component, OnInit, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
    <h4 class="well-title">{{title}}</h4>
    <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent implements OnInit {
    @Input() title: string;
    // tslint:disable-next-line:no-inferrable-types
    visible: boolean = true;

    constructor() { }

    ngOnInit(): void { }

    toggleContent() {
        this.visible = !this.visible;
    }
}
