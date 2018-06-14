import {Run} from './run';
import {Segment} from '../segment';

export class MixedIntervalRun extends Run {

  constructor(index: number) {
    super(index, 'Mixed Interval Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    switch (index) {
      case 1:
        this.segments.push(new Segment(1, 'minutes', 5));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(3, 'minutes', 4));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(5, 'minutes', 3));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(3, 'minutes', 4));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(1, 'minutes', 5));
        break;
      case 2:
        this.segments.push(new Segment(1.5, 'minutes', 5));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(5, 'minutes', 4));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(10, 'minutes', 3));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(5, 'minutes', 4));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.segments.push(new Segment(1.5, 'minutes', 5));
        break;
      case 3:
        this.addInterval('minutes', 2, 1, 5, 2, 1);
        this.addInterval('minutes', 2, 3, 4, 2, 1);
        this.segments.push(new Segment(10, 'minutes', 3));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.addInterval('minutes', 2, 3, 4, 2, 1);
        this.addInterval('minutes', 2, 1, 5, 2, 1);
        break;
      case 4:
        this.addInterval('minutes', 2, 1.5, 5, 2.5, 1);
        this.addInterval('minutes', 2, 5, 4, 2, 1);
        this.segments.push(new Segment(10, 'minutes', 3));
        this.segments.push(new Segment(2, 'minutes', 1));
        this.addInterval('minutes', 2, 1.5, 5, 2, 1);
        this.addInterval('minutes', 2, 5, 4, 2, 1);
        break;
    }
    this.segments.push(new Segment(5, 'minutes', 1));
  }
}
