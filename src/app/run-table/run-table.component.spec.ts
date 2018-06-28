import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RunTableComponent} from './run-table.component';
import {ZoneTagComponent} from '../zone-tag/zone-tag.component';

describe('RunTableComponent', () => {
  let component: RunTableComponent;
  let fixture: ComponentFixture<RunTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunTableComponent, ZoneTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
