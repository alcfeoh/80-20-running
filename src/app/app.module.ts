import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunTableComponent } from './run-table/run-table.component';
import { ZoneTagComponent } from './zone-tag/zone-tag.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AllRunsComponent } from './all-runs/all-runs.component';
import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    RunTableComponent,
    ZoneTagComponent,
    ScheduleComponent,
    AllRunsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
