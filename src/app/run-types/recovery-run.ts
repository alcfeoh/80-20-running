import {Run} from './run';
import {Segment} from '../segment';

export class RecoveryRun extends Run {

  constructor(index: number) {
    super(index, 'Recovery Run');
    this.segments.push(new Segment(15 + index * 5, 'minutes', 1));
  }
}
