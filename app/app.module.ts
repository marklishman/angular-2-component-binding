import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.component";
import { TrvParentComponent } from "./trv-parent.component";

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        TrvParentComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }