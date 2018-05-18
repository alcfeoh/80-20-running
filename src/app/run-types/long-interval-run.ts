import {Run} from './run';
import {Segment} from '../segment';

export class LongIntervalRun extends Run {

  constructor(index: number) {
    super(index, 'Long Interval Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    switch (index) {
      case 1:
        this.addInterval('minutes', 3, 3, 4, 2, 1); break;
      case 2:
        this.addInterval('minutes', 4, 3, 4, 3, 1); break;
      case 3:
        this.addInterval('minutes', 3, 5, 4, 3, 1); break;
      case 4:
        this.addInterval('minutes', 5, 3, 4, 2, 1); break;
      case 5:
        this.addInterval('minutes', 6, 3, 4, 2, 1); break;
      case 6:
        this.addInterval('minutes', 4, 5, 4, 3, 1); break;
      case 7:
      case 8:
      case 9:
      case 10:
        this.addInterval('minutes', index - 2, 5, 4, 3, 1); break;
    }
    this.segments.push(new Segment(5, 'minutes', 1));
  }
}
