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

  showDetails = false;

  tagClasses;
  detailsClasses;

  ngOnChanges() {
     const classes = {
       'is-primary': this.index === 1,
       'is-info': this.index === 2,
       'is-success': this.index === 3,
       'is-warning': this.index === 4,
       'is-danger': this.index === 5
     };
     this.tagClasses = { 'tag': true, ...classes};
     this.detailsClasses = { 'message': true, ...classes};
   }

   getZoneInfo() {
    switch (this.index) {
      case 1:
        return '6:02 to 6:29 - 60 to 70%';
      case 2:
        return '5:21 to 6:00 - 70 to 82%';
      case 3:
        return '4:48 to 4:58 - 85 to 90%';
      case 4:
        return '4:41 to 4:50 - 87 to 92%';
      case 5:
        return '3:25 to 3:45 - 90 to 100%';
    }
   }
}
