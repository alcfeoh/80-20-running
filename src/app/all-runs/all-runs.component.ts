import {Component} from '@angular/core';
import {crint, ff, foun, getRuns, hill, lgint, long, longff, longsp, mxint, rec, shint, sp, temp} from '../run-types/run-factory';
import {HalfMarathon} from '../run-types/half-marathon';

@Component({
  selector: 'app-all-runs',
  templateUrl: './all-runs.component.html',
  styleUrls: ['./all-runs.component.css']
})
export class AllRunsComponent {

  allRuns = [
    getRuns(9, rec), getRuns(9, foun), getRuns(9, long),
    getRuns(9, ff), getRuns(12, hill), getRuns(9, temp),
    getRuns(9, shint), getRuns(10, lgint), getRuns(6, longsp),
    getRuns(6, longff), getRuns(4, mxint), getRuns(5, crint),
    getRuns(14, sp), new HalfMarathon()
  ];
}
