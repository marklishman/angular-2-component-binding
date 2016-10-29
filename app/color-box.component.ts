import { Component, Input } from '@angular/core';

import { RedGreenBlue } from "./red-green-blue";

@Component({
    selector: 'color-box',
    template: `<div [style.background-color]="rgb.style"></div>`,
    styles: ['div {height: 100px; width: 100px;}']
})
export class ColorBoxComponent {
    @Input() rgb: RedGreenBlue;
}