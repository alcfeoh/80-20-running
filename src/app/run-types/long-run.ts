import {Run} from './run';
import {Segment} from '../segment';

export class LongRun extends Run {

  constructor(index: number) {
    super(index, 'Long Run');
    this.segments.push(new Segment(1, 'miles', 1));
    this.segments.push(new Segment(3.5 + index, 'miles', 2));
    this.segments.push(new Segment(0.5, 'miles', 1));
  }

}
