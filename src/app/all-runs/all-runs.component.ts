import { Component } from '@angular/core';
import {FastFinishRun} from '../fast-finish-run';
import {RecoveryRun} from '../recovery-run';
import {HillRepetitionRun} from '../hill-repetition-run';
import {LongRun} from '../long-run';
import {FoundationRun} from '../foundation-run';
import {TempoRun} from '../tempo-run';

@Component({
  selector: 'app-all-runs',
  templateUrl: './all-runs.component.html',
  styleUrls: ['./all-runs.component.css']
})
export class AllRunsComponent {

  recoveryRuns: Array<RecoveryRun> = [];
  foundationRuns: Array<FoundationRun> = [];
  longRuns: Array<LongRun> = [];
  fastFinishRuns: Array<FastFinishRun> = [];
  hillRepsRuns: Array<HillRepetitionRun> = [];
  tempoRuns: Array<TempoRun> = [];

  constructor() {
    for (let i = 1; i <= 9;  i++) {
      this.recoveryRuns.push(new RecoveryRun(i));
      this.foundationRuns.push(new FoundationRun(i));
      this.longRuns.push(new LongRun(i));
      this.fastFinishRuns.push(new FastFinishRun(i));
      this.hillRepsRuns.push(new HillRepetitionRun(i));
      this.tempoRuns.push(new TempoRun(i));
    }
    this.hillRepsRuns.push(new HillRepetitionRun(10));
    this.hillRepsRuns.push(new HillRepetitionRun(11));
    this.hillRepsRuns.push(new HillRepetitionRun(12));
  }
}
