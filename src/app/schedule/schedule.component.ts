import { Component } from '@angular/core';
import {crint, ff, foun, hill, lgint, long, longff, longsp, rec, shint, temp} from '../run-types/run-factory';
import {Run} from '../run-types/run';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  currentWeek: number;
  weeksMap = new Map<number, Array<Run>>();
  weekNumbers: Array<number>;

  constructor() {
    this.weeksMap.set(4, [ff(3), foun(3), foun(2), hill(2), rec(3), long(3)]);
    this.weeksMap.set(5, [ff(4), foun(3), foun(3), hill(4), rec(3), long(4)]);
    this.weeksMap.set(6, [ff(2), foun(2), foun(3), hill(3), rec(3), long(2)]);
    this.weeksMap.set(7, [temp(1), rec(3), foun(4), shint(2), rec(3), long(5)]);
    this.weeksMap.set(8, [crint(1), rec(4), foun(4), shint(3), rec(3), long(6)]);
    this.weeksMap.set(9, [temp(1), rec(3), foun(3), shint(2), rec(3), long(3)]);
    this.weeksMap.set(10, [temp(3), rec(4), foun(4), lgint(2), rec(4), longsp(1)]);
    this.weeksMap.set(11, [temp(4), rec(4), foun(5), lgint(4), rec(4), longff(1)]);
    this.weeksMap.set(12, [temp(2), rec(4), foun(4), lgint(3), rec(4), long(3)]);
    this.weekNumbers = Array.from(this.weeksMap.keys());
    this.currentWeek = +localStorage.getItem('currentWeek') || 4;
  }

  getRunForDay(index: number): Array<Run> {
    return [this.weeksMap.get(this.currentWeek)[index]];
  }

  setWeek() {
    localStorage.setItem('currentWeek', '' + this.currentWeek);
  }
}
