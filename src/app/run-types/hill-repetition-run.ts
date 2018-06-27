import {Run} from './run';
import {Segment} from '../segment';

export class HillRepetitionRun extends Run {

  constructor(index: number) {
    super(index, 'Hill Repetition Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    if (index === 1) {
      this.addInterval('minutes', 6, 0.5, 5, 1.5,  1);
    } else if (index === 2) {
      this.addInterval('minutes', 8, 0.5, 5, 1.5,  1);
    } else if (index === 3) {
      this.addInterval('minutes', 6, 1, 5, 2,  1);
    } else if (index === 4) {
      this.addInterval('minutes', 10, 0.5, 5, 1.5,  1);
    } else if (index === 5) {
      this.addInterval('minutes', 12, 0.5, 5, 1.5,  1);
    } else if (index === 6) {
      this.addInterval('minutes', 8, 1, 5, 2,  1);
    } else if (index === 7) {
      this.addInterval('minutes', 6, 1.5, 5, 2.5,  1);
    } else if (index === 8) {
      this.addInterval('minutes', 10, 1, 5, 2,  1);
    } else if (index === 9) {
      this.addInterval('minutes', 8, 1.5, 5, 2.5,  1);
    } else if (index === 10) {
      this.addInterval('minutes', 12, 1, 5, 2,  1);
    } else if (index === 11) {
      this.addInterval('minutes', 10, 1.5, 5, 2.5,  1);
    } else if (index === 12) {
      this.addInterval('minutes', 12, 1.5, 5, 2.5,  1);
    }
    this.segments.push(new Segment(5, 'minutes', 1));
  }

}
