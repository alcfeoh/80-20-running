import {Component, Input} from '@angular/core';
import {Run} from '../run-types/run';

@Component({
  selector: 'app-run-table',
  templateUrl: './run-table.component.html',
  styleUrls: ['./run-table.component.css']
})
export class RunTableComponent {

  @Input()
  title: string;

  @Input()
  runs: Array<Run>;
}
