import {Run} from './run';
import {Segment} from '../segment';

export class LongRunSpeedPlay extends Run {

  constructor(index: number) {
    super(index, 'Long Run With Speed Play');
    this.segments.push(new Segment(0.5, 'miles', 1));
    this.segments.push(new Segment(1, 'miles', 2));
    this.addInterval('miles', 6 + index * 2, 0.25, 3, 0.75, 2);
    this.segments.push(new Segment(0.5, 'miles', 1));
  }
}
