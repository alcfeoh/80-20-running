import {Run} from './run';
import {Segment} from '../segment';

export class LongRunFastFinish extends Run {

  constructor(index: number) {
    super(index, 'Long Run with Fast Finish');
    this.segments.push(new Segment(0.5, 'miles', 1));
    switch (index) {
      case 1:
        this.segments.push(new Segment(8.5, 'miles', 2));
        this.segments.push(new Segment(1, 'miles', 3));
        break;
      case 2:
        this.segments.push(new Segment(10.5, 'miles', 2));
        this.segments.push(new Segment(1, 'miles', 3));
        break;
      case 3:
        this.segments.push(new Segment(12, 'miles', 2));
        this.segments.push(new Segment(1.5, 'miles', 3));
        break;
      case 4:
        this.segments.push(new Segment(14, 'miles', 2));
        this.segments.push(new Segment(1.5, 'miles', 3));
        break;
      case 5:
        this.segments.push(new Segment(15.5, 'miles', 2));
        this.segments.push(new Segment(2, 'miles', 3));
        break;
      case 6:
        this.segments.push(new Segment(17.5, 'miles', 2));
        this.segments.push(new Segment(2, 'miles', 3));
        break;
    }
  }
}
