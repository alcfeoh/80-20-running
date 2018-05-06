import { Component } from '@angular/core';
import {RecoveryRun} from './recovery-run';
import {FoundationRun} from './foundation-run';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recoveryRuns: Array<RecoveryRun> = [];
  foundationRuns: Array<FoundationRun> = [];

  constructor() {
    for (let i = 1; i <= 9;  i++) {
      this.recoveryRuns.push(new RecoveryRun(i));
      this.foundationRuns.push(new FoundationRun(i));
    }
  }
}
