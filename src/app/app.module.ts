import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { DropdownModule } from "primeng/dropdown";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
