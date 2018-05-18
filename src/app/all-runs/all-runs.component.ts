import { Component } from '@angular/core';
import {FastFinishRun} from '../run-types/fast-finish-run';
import {RecoveryRun} from '../run-types/recovery-run';
import {HillRepetitionRun} from '../run-types/hill-repetition-run';
import {LongRun} from '../run-types/long-run';
import {FoundationRun} from '../run-types/foundation-run';
import {TempoRun} from '../run-types/tempo-run';
import {ShortIntervalRun} from '../run-types/short-interval-run';
import {LongIntervalRun} from '../run-types/long-interval-run';

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
  shortIntRuns: Array<ShortIntervalRun> = [];
  longIntRuns: Array<LongIntervalRun> = [];

  constructor() {
    for (let i = 1; i <= 9;  i++) {
      this.recoveryRuns.push(new RecoveryRun(i));
      this.foundationRuns.push(new FoundationRun(i));
      this.longRuns.push(new LongRun(i));
      this.fastFinishRuns.push(new FastFinishRun(i));
      this.hillRepsRuns.push(new HillRepetitionRun(i));
      this.tempoRuns.push(new TempoRun(i));
      this.shortIntRuns.push(new ShortIntervalRun(i));
      this.longIntRuns.push(new LongIntervalRun(i));
    }
    this.longIntRuns.push(new LongIntervalRun(10));
    this.hillRepsRuns.push(new HillRepetitionRun(10));
    this.hillRepsRuns.push(new HillRepetitionRun(11));
    this.hillRepsRuns.push(new HillRepetitionRun(12));
  }
}
