import {Segment} from './segment';

export abstract class Run {

  segments: Array<Segment> = [];

  constructor(public index: number = 1) {}

  getSegments(): Array<Segment> {
    return this.segments;
  }
}
