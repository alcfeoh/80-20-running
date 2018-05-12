import { Component, OnInit } from '@angular/core';
import {FastFinishRun} from '../run-types/fast-finish-run';
import {FoundationRun} from '../run-types/foundation-run';
import {HillRepetitionRun} from '../run-types/hill-repetition-run';
import {RecoveryRun} from '../run-types/recovery-run';
import {LongRun} from '../run-types/long-run';

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
