import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunTableComponent } from './run-table/run-table.component';
import { ZoneTagComponent } from './zone-tag/zone-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    RunTableComponent,
    ZoneTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
