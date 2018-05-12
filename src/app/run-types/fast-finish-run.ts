import {Run} from './run';
import {Segment} from '../segment';

export class FastFinishRun extends Run {

  constructor(index: number) {
    super(index, 'Fast Finish Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    if (index <= 2) {
      this.segments.push(new Segment(10 + index * 5, 'minutes', 2));
    } else if (index === 3) {
      this.segments.push(new Segment(20, 'minutes', 2));
    } else if (index <= 5) {
      this.segments.push(new Segment(25, 'minutes', 2));
    }  else if (index === 6) {
      this.segments.push(new Segment(30, 'minutes', 2));
    } else if (index <= 8) {
      this.segments.push(new Segment(35, 'minutes', 2));
    } else if (index === 9) {
      this.segments.push(new Segment(40, 'minutes', 2));
    }  else {
      this.segments.push(new Segment(45, 'minutes', 2));
    }

    if (index <= 2) {
      this.segments.push(new Segment(5, 'minutes', 3));
    } else if (index <= 4) {
      this.segments.push(new Segment(10, 'minutes', 3));
    } else if (index <= 7) {
      this.segments.push(new Segment(12, 'minutes', 3));
    } else {
      this.segments.push(new Segment(15, 'minutes', 3));
    }
  }

}
