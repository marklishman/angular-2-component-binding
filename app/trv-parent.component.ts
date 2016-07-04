import { Component } from "@angular/core";

import { ChildComponent } from "./child.component";

@Component({
    selector: 'trv-parent',
    template: `
        <div #parent id="parentId">
            <h1>Template Reference Variable</h1>
            <p>
                <child #child 
                       id="childId"
                       oneTime="one-time initialization"
                       [param]="sharedObject" 
                       bind-anotherParam="'test param'"
                       (paramSentBack)="onParamSentBack($event)"
                       on-testEvent="onTestEvent($event)">
                </child>
            </p>
            <p>
                Parent id: {{parent.id}}<br/>
                child id: {{child.id}} (empty)<br/>
                oneTime: {{child.oneTime}}<br/>
                param: {{child.param | json}}<br/>
                anotherParam: {{child.anotherParam}}<br/>
                paramSentBack: {{child.paramSentBack | async | json}}<br/>
                testEvent: {{child.testEvent | async}}
            </p>
        </div>`,
    directives: [ChildComponent]
})
export class TrvParentComponent {

    private sharedObject = {
        id: 123,
        name: 'one-two-three'
    };

    private param: any;

    /*
        Style Guide
        
        Don't prefix event name with 'on-' (avoids on-onTestEvent)
        
        Prefix handler (below) with 'on'
     */
    private onParamSentBack(event: any) {
        this.param = event;
    }

    private onTestEvent(event: any) {
        alert(event);
    }
}