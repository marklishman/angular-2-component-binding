import { Component } from '@angular/core';
import { RedGreenBlue } from "./red-green-blue";

@Component({
    selector: 'app',
    template: `
        <color-value name="Red" (value)="rgb.red=$event"></color-value>
        <color-value name="Green" (value)="rgb.green=$event" init-value="200"></color-value>
        <color-value name="Blue" (value)="rgb.blue=$event" init-value="140"></color-value>
        <color-box [rgb]="rgb"></color-box>`,
})
export class AppComponent {
    private rgb: RedGreenBlue = new RedGreenBlue();
}