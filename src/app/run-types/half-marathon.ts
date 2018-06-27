import {Run} from './run';
import {Segment} from '../segment';

export class HalfMarathon extends Run {

  constructor() {
    super(1, 'Half Marathon');
    this.segments.push(new Segment(13.1, 'miles', 4));
  }
}
