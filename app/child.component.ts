import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
    Input and output parameters can be specified in the @Component decorator.
    However this is discouraged in the Style Guide.
 */

@Component({
    selector: 'child',
    template: `
        <h3>Child</h3>
        <p>
          Id: {{param.id}}, name: {{param.name}}  
        </p>
        <p>
            <button (click)="sendParamBack()">Send Param Back</button>
        </p>
        <p>
            <button (click)="emitTestEvent()">Emit Test Event</button>
        </p>`
    // inputs: ['param:alias'],
    // outputs: ['buttonClicked:alias']
})
export class ChildComponent {

    /*
        Decorators can contain aliases
        
            @Input('alias') private param: any;
            @Output('alias') private buttonClicked = new EventEmitter<any>();

        However this is discouraged in the Style Guide.
     */
    @Input() private oneTime: string;
    @Input() private param: any;
    @Input() private anotherParam: string;
    @Output() private paramSentBack = new EventEmitter<any>();
    @Output() private testEvent = new EventEmitter<any>();

    private sendParamBack() {
        this.param.name = this.oneTime;
        this.paramSentBack.emit(this.param);
    }

    private emitTestEvent() {
        this.testEvent.emit(this.anotherParam);
    }
}