import {Run} from './run';
import {Segment} from '../segment';

export class FoundationRun extends Run {

  constructor(index: number) {
    super(index, 'Foundation Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5 + index * 5, 'minutes', 2));
    this.segments.push(new Segment(5, 'minutes', 1));
  }

}
