import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'color-value',
    template: `
        <p>
            {{name}}: 
            <input #color
                   type="number" 
                   min="0" 
                   max="255" 
                   step="10" 
                   [value]="initialValue"
                   (input)="sendColor(color.value)"/>
        </p>`,
})
export class ColorValueComponent implements OnInit {
    @Input() name: string;
    @Input("init-value") initialValue: string = "0";

    @Output("value") colorValueEvent: EventEmitter<string> = new EventEmitter();

    ngOnInit() {
        this.sendColor(this.initialValue);
    }

    private sendColor(color: string): void {
        this.colorValueEvent.emit(color);
    }
}