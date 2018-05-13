import {RecoveryRun} from './recovery-run';
import {FastFinishRun} from './fast-finish-run';
import {FoundationRun} from './foundation-run';
import {HillRepetitionRun} from './hill-repetition-run';
import {LongRun} from './long-run';
import {TempoRun} from './tempo-run';
import {ShortIntervalRun} from './short-interval-run';
import {CruiseIntervalRun} from './cruise-interval-run';

export function rec(index: number): RecoveryRun {
  return new RecoveryRun(index);
}

export function ff(index: number): FastFinishRun {
  return new FastFinishRun(index);
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

export function temp(index: number): TempoRun {
  return new TempoRun(index);
}

export function shint(index: number): ShortIntervalRun {
  return new ShortIntervalRun(index);
}

export function crint(index: number): CruiseIntervalRun {
  return new CruiseIntervalRun(index);
}

