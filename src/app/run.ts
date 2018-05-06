import {Segment} from './segment';

export abstract class Run {

  segments: Array<Segment> = [];

  constructor(public index: number = 1, public name: string = 'Run') {}

  getSegments(): Array<Segment> {
    return this.segments;
  }

  getTotalDuration(): string {
    const duration = this.segments.reduce((acc, segment) => acc + segment.duration, 0);
    return duration + ' '+ this.getUnit();
  }

  getUnit(): string {
    return this.segments[0].unit;
  }
}
