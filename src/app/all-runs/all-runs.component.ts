import { Component } from '@angular/core';
import {FastFinishRun} from '../run-types/fast-finish-run';
import {RecoveryRun} from '../run-types/recovery-run';
import {HillRepetitionRun} from '../run-types/hill-repetition-run';
import {LongRun} from '../run-types/long-run';
import {FoundationRun} from '../run-types/foundation-run';
import {TempoRun} from '../run-types/tempo-run';
import {ShortIntervalRun} from '../run-types/short-interval-run';
import {LongIntervalRun} from '../run-types/long-interval-run';
import {LongRunSpeedPlay} from '../run-types/long-run-speed-play';
import {ff, foun, getRuns, hill, lgint, long, longsp, rec, shint, temp} from '../run-types/run-factory';

@Component({
  selector: 'app-all-runs',
  templateUrl: './all-runs.component.html',
  styleUrls: ['./all-runs.component.css']
})
export class AllRunsComponent {

  recoveryRuns: Array<RecoveryRun> = getRuns(9, rec);
  foundationRuns: Array<FoundationRun> = getRuns(9, foun);
  longRuns: Array<LongRun> = getRuns(9, long);
  fastFinishRuns: Array<FastFinishRun> = getRuns(9, ff);
  hillRepsRuns: Array<HillRepetitionRun> = getRuns(12, hill);
  tempoRuns: Array<TempoRun> = getRuns(9, temp);
  shortIntRuns: Array<ShortIntervalRun> = getRuns(9, shint);
  longIntRuns: Array<LongIntervalRun> = getRuns(10, lgint);
  longRunsSpeedPlay: Array<LongRunSpeedPlay> = getRuns(6, longsp);
  
}
