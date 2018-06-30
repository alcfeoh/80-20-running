import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {RunTableComponent} from './run-table/run-table.component';
import {AllRunsComponent} from './all-runs/all-runs.component';
import {ZoneTagComponent} from './zone-tag/zone-tag.component';
import {NavigationComponent} from './navigation/navigation.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AppComponent, NavigationComponent, AllRunsComponent, RunTableComponent, ZoneTagComponent, NavigationComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
