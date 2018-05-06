import {Component, Input, OnChanges} from '@angular/core';
import {Zone} from '../types';

@Component({
  selector: 'app-zone-tag',
  templateUrl: './zone-tag.component.html',
  styleUrls: ['./zone-tag.component.css']
})
export class ZoneTagComponent implements OnChanges {

  @Input()
  index: Zone;

  classes;

  ngOnChanges() {
     this.classes = {
       'tag': true,
       'is-primary': this.index === 1,
       'is-info': this.index === 2,
       'is-success': this.index === 3,
       'is-warning': this.index === 4,
       'is-danger': this.index === 5
     };
   }
}
