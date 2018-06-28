import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleComponent} from './schedule.component';
import {RunTableComponent} from '../run-table/run-table.component';
import {AllRunsComponent} from '../all-runs/all-runs.component';
import {ZoneTagComponent} from '../zone-tag/zone-tag.component';
import {FormsModule} from '@angular/forms';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleComponent, AllRunsComponent, RunTableComponent, ZoneTagComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
