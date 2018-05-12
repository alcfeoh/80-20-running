import {Run} from './run';
import {Segment} from '../segment';

export class TempoRun extends Run {

  constructor(index: number) {
    super(index, 'Tempo Run');
    this.segments.push(new Segment(5, 'minutes', 1));
    this.segments.push(new Segment(5, 'minutes', 2));
    let tempoLength = 15;
    switch (index) {
      case 2:
        tempoLength = 18; break;
      case 3:
        tempoLength = 20; break;
      case 4:
        tempoLength = 24; break;
      case 5:
        tempoLength = 28; break;
      case 6:
        tempoLength = 30; break;
      case 7:
        tempoLength = 32; break;
      case 8:
        tempoLength = 36; break;
      case 9:
        tempoLength = 40; break;
      case 10:
        tempoLength = 45; break;
    }
    this.segments.push(new Segment(tempoLength, 'minutes', 3));
    this.segments.push(new Segment(5, 'minutes', 2));
    this.segments.push(new Segment(5, 'minutes', 1));
  }
}
