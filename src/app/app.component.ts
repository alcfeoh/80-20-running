import { Component } from '@angular/core';
import {RecoveryRun} from './recovery-run';
import {FoundationRun} from './foundation-run';
import {LongRun} from './long-run';
import {FastFinishRun} from './fast-finish-run';
import {HillRepetitionRun} from './hill-repetition-run';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recoveryRuns: Array<RecoveryRun> = [];
  foundationRuns: Array<FoundationRun> = [];
  longRuns: Array<LongRun> = [];
  fastFinishRuns: Array<FastFinishRun> = [];
  hillRepsRuns: Array<HillRepetitionRun> = [];

  constructor() {
    for (let i = 1; i <= 9;  i++) {
      this.recoveryRuns.push(new RecoveryRun(i));
      this.foundationRuns.push(new FoundationRun(i));
      this.longRuns.push(new LongRun(i));
      this.fastFinishRuns.push(new FastFinishRun(i));
      this.hillRepsRuns.push(new HillRepetitionRun(i));
    }
    this.hillRepsRuns.push(new HillRepetitionRun(10));
    this.hillRepsRuns.push(new HillRepetitionRun(11));
    this.hillRepsRuns.push(new HillRepetitionRun(12));
  }
}
