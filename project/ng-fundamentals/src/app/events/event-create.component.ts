import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-create',
    template: `
    <h1>New Event </h1>
    <hr>
    <div class="col-md-6">
        <h3>Create Event Form</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">
            Save
        </button>
        <button type="button" class="btn btn-default" (click)="clickCancel()">
            Cancel
        </button>
    </div>
    `
})
export class EventCreateComponent implements OnInit {
    constructor(private route: Router) { }

    ngOnInit(): void { }

    clickCancel() {
        this.route.navigate(['/events']);
    }
}
