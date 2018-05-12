import {Segment} from '../segment';
import {IntervalSegment} from '../interval-segment';
import {Unit, Zone} from '../types';

export abstract class Run {

  segments: Array<Segment> = [];

  constructor(public index: number = 1, public name: string = 'Run') {}

  protected addInterval(unit: Unit, reps: number, duration1: number, zone1: Zone, duration2: number, zone2: Zone): void {
    this.segments.push(
      new IntervalSegment(reps, new Segment(duration1, unit, zone1), new Segment(duration2, unit, zone2))
    );
  }

  getSegments(): Array<Segment> {
    return this.segments;
  }

  getTotalDuration(): string {
    const duration = this.segments.reduce((acc, segment) => acc + segment.duration, 0);
    return duration + ' ' + this.getUnit();
  }

  getUnit(): string {
    return this.segments[0].unit;
  }
}
