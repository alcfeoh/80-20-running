import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllRunsComponent} from './all-runs.component';
import {AppModule} from '../app.module';
import {RunTableComponent} from '../run-table/run-table.component';
import {ZoneTagComponent} from '../zone-tag/zone-tag.component';

describe('AllRunsComponent', () => {
  let component: AllRunsComponent;
  let fixture: ComponentFixture<AllRunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllRunsComponent, RunTableComponent, ZoneTagComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
