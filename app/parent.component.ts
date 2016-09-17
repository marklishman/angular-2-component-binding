import { Component } from "@angular/core";

@Component({
    selector: 'parent',
    template: `
        <div #parent id="parentId">
            <h1>Component Binding</h1>
            <h3>Parent</h3>
            <p>Parameters are passed by reference: {{sharedObject === param}}</p>
            <pre>{{sharedObject | json}}</pre>
            <pre>{{param | json}}</pre>
            
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
        </div>`
})
export class ParentComponent {

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