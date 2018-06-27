import {Run} from './run';
import {Segment} from '../segment';

export class SpeedPlayRun extends Run {

  constructor(index: number) {
    super(index, 'Speed Play Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    if (index === 1) {
      this.addInterval('minutes', 3, 2, 4, 2,  1);
    } else if (index === 2) {
      this.addInterval('minutes', 5, 1, 5, 2,  1);
    } else if (index === 3) {
      this.addInterval('minutes', 4, 2, 4, 2,  1);
    } else if (index === 4) {
      this.addInterval('minutes', 6, 1, 5, 2,  1);
    } else if (index === 5) {
      this.addInterval('minutes', 5, 2, 4, 2,  1);
    } else if (index === 6) {
      this.addInterval('minutes', 7, 1, 5, 2,  1);
    } else if (index === 7) {
      this.addInterval('minutes', 6, 2, 4, 2,  1);
    } else if (index === 8) {
      this.addInterval('minutes', 8, 1, 5, 2,  1);
    } else if (index === 9) {
      this.addInterval('minutes', 9, 1, 5, 2,  1);
    } else if (index === 10) {
      this.addInterval('minutes', 7, 2, 4, 2,  1);
    } else if (index === 11) {
      this.addInterval('minutes', 10, 1, 5, 2,  1);
    } else if (index === 12) {
      this.addInterval('minutes', 8, 2, 4, 2,  1);
    } else if (index === 13) {
      this.addInterval('minutes', 9, 2, 4, 2,  1);
    } else if (index === 14) {
      this.addInterval('minutes', 12, 1, 5, 2,  1);
    }
    this.segments.push(new Segment(5, 'minutes', 1));
  }

}
