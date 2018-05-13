import {Run} from './run';
import {Segment} from '../segment';

export class CruiseIntervalRun extends Run {

  constructor(index: number) {
    super(index, 'Cruise Interval Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    switch (index) {
      case 1:
        this.addInterval('minutes', 4, 5, 3, 3, 1); break;
      case 2:
        this.addInterval('minutes', 4, 8, 3, 3, 1); break;
      case 3:
        this.addInterval('minutes', 4, 10, 3, 3, 1); break;
      case 4:
        this.addInterval('minutes', 4, 12, 3, 3, 1); break;
      case 5:
        this.addInterval('minutes', 4, 15, 3, 3, 1); break;
    }
    this.segments.push(new Segment(5, 'minutes', 2));
    this.segments.push(new Segment(5, 'minutes', 1));
  }
}
