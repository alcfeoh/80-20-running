import {Unit, Zone} from './types';

export class Segment {

  constructor(public duration: number, public unit: Unit, public zone: Zone) {}

  isInterval(): boolean {
    return false;
  }
}
