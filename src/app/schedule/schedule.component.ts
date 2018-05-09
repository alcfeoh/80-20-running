import { Component, OnInit } from '@angular/core';
import {FastFinishRun} from '../fast-finish-run';
import {FoundationRun} from '../foundation-run';
import {HillRepetitionRun} from '../hill-repetition-run';
import {RecoveryRun} from '../recovery-run';
import {LongRun} from '../long-run';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  monRun = new FastFinishRun(3);
  tueRun = new FoundationRun(3);
  wedRun = new FoundationRun(2);
  thuRun = new HillRepetitionRun(2);
  friRun = new RecoveryRun(3);
  satRun = new LongRun(3);

  constructor() { }

  ngOnInit() {
  }

}
