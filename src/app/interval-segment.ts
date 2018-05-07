import {Segment} from './segment';

export class IntervalSegment extends Segment {

  constructor(public repeats: number, public segment1: Segment, public segment2: Segment) {
    super(repeats * (segment1.duration + segment2.duration), segment1.unit, null);
  }

  isInterval(): boolean {
    return true;
  }
}
