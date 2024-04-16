import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTreeGridModule } from "angular-tree-grid";

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    AngularTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
