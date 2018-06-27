import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './schedule/schedule.component';
import {AllRunsComponent} from './all-runs/all-runs.component';

const routes: Routes = [
  {path: '', component: ScheduleComponent},
  {path: 'allRuns', component: AllRunsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
