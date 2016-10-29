import { Component, Input } from '@angular/core';

import { RedGreenBlue } from "./red-green-blue";

@Component({
    selector: 'color-box',
    template: `<pre [style.background-color]="rgb.style">{{rgb | json}}</pre>`,
    styles: ['pre {height: 90px; width: 140px; padding: 10px;}']
})
export class ColorBoxComponent {
    @Input() rgb: RedGreenBlue;
}