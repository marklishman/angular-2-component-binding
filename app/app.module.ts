import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ColorValueComponent } from "./color-value.component";
import { FormsModule } from "@angular/forms";
import { ColorBoxComponent } from "./color-box.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ColorValueComponent,
        ColorBoxComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }