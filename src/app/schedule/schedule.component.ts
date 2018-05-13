import { Component } from '@angular/core';
import {crint, ff, foun, hill, long, rec, shint, temp} from '../run-types/run-factory';
import {Run} from '../run-types/run';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  currentWeek = 4;
  weeksMap = new Map<number, Array<Run>>();

  constructor() {
    this.weeksMap.set(4, [ff(3), foun(3), foun(2), hill(2), rec(3), long(3)]);
    this.weeksMap.set(5, [ff(4), foun(3), foun(3), hill(4), rec(3), long(4)]);
    this.weeksMap.set(6, [ff(2), foun(2), foun(3), hill(3), rec(3), long(2)]);
    this.weeksMap.set(7, [temp(1), rec(3), foun(4), shint(2), rec(3), long(5)]);
    this.weeksMap.set(8, [crint(1), rec(4), foun(4), shint(3), rec(3), long(6)]);
    this.weeksMap.set(9, [temp(1), rec(3), foun(3), shint(2), rec(3), long(3)]);
  }

  getRunForDay(index: number): Array<Run> {
    return [this.weeksMap.get(this.currentWeek)[index]];
  }
}
