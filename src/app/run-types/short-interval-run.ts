import {Run} from './run';
import {Segment} from '../segment';

export class ShortIntervalRun extends Run {

  constructor(index: number) {
    super(index, 'Short Interval Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    switch (index) {
      case 1:
        this.addInterval('minutes', 6, 1, 5, 2, 1); break;
      case 2:
        this.addInterval('minutes', 8, 1, 5, 2, 1); break;
      case 3:
        this.addInterval('minutes', 6, 1.5, 5, 2.5, 1); break;
      case 4:
        this.addInterval('minutes', 10, 1, 5, 2, 1); break;
      case 5:
        this.addInterval('minutes', 8, 1.5, 5, 2.5, 1); break;
      case 6:
        this.addInterval('minutes', 12, 1, 5, 2, 1); break;
      case 7:
        this.addInterval('minutes', 10, 1.5, 5, 2.5, 1); break;
      case 8:
        this.addInterval('minutes', 12, 1.5, 5, 2.5, 1); break;
    }
    this.segments.push(new Segment(5, 'minutes', 1));
  }
}
