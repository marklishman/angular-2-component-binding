import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'color-value',
    template: `
        <p>
            {{name}}: 
            <input type="number" 
                   min="0" 
                   max="255" 
                   step="10" 
                   [(ngModel)]="value"
                   (input)="sendColor()"/>
        </p>`,
})
export class ColorValueComponent implements OnInit {
    @Input() name: string;
    @Input("init-value") value: number = 0;

    @Output("value") colorValueEvent: EventEmitter<number> = new EventEmitter();

    ngOnInit() {
        this.sendColor();
    }

    private sendColor(): void {
        this.colorValueEvent.emit(this.value);
    }
}