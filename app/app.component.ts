import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <parent *ngIf="showSection('component')"></parent>
        <trv-parent *ngIf="showSection('trv')"></trv-parent>
        `
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