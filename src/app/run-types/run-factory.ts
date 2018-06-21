import {RecoveryRun} from './recovery-run';
import {FastFinishRun} from './fast-finish-run';
import {FoundationRun} from './foundation-run';
import {HillRepetitionRun} from './hill-repetition-run';
import {LongRun} from './long-run';
import {TempoRun} from './tempo-run';
import {ShortIntervalRun} from './short-interval-run';
import {CruiseIntervalRun} from './cruise-interval-run';
import {LongIntervalRun} from './long-interval-run';
import {LongRunSpeedPlay} from './long-run-speed-play';
import {LongRunFastFinish} from './long-run-fast-finish';
import {MixedIntervalRun} from './mixed-interval-run';
import {SpeedPlayRun} from './speed-play-run';

export function rec(index: number): RecoveryRun {
  return new RecoveryRun(index);
}

export function ff(index: number): FastFinishRun {
  return new FastFinishRun(index);
}

export function sp(index: number): SpeedPlayRun {
  return new SpeedPlayRun(index);
}

export function foun(index: number): FoundationRun {
  return new FoundationRun(index);
}

export function hill(index: number): HillRepetitionRun {
  return new HillRepetitionRun(index);
}

export function long(index: number): LongRun {
  return new LongRun(index);
}

export function longsp(index: number): LongRunSpeedPlay {
  return new LongRunSpeedPlay(index);
}

export function longff(index: number): LongRunFastFinish {
  return new LongRunFastFinish(index);
}

export function temp(index: number): TempoRun {
  return new TempoRun(index);
}

export function shint(index: number): ShortIntervalRun {
  return new ShortIntervalRun(index);
}

export function crint(index: number): CruiseIntervalRun {
  return new CruiseIntervalRun(index);
}

export function lgint(index: number): LongIntervalRun {
  return new LongIntervalRun(index);
}

export function mxint(index: number): MixedIntervalRun {
  return new MixedIntervalRun(index);
}

export function getRuns<T>(end: number, runFactory: (index: number) => T): T[] {
  const res = [];
  for (let i = 1; i <= end; i++) {
    res.push(runFactory(i));
  }
  return res;
}



