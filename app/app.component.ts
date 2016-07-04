import { Component } from '@angular/core';

import { ParentComponent } from "./parent.component";
import { TrvParentComponent } from "./trv-parent.component";

@Component({
    selector: 'app',
    template: `
        <parent *ngIf="showSection('component')"></parent>
        <trv-parent *ngIf="showSection('trv')"></trv-parent>
        `,
    directives: [
        ParentComponent,
        TrvParentComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}