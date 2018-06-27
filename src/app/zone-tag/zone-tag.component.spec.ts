import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ZoneTagComponent} from './zone-tag.component';

describe('ZoneTagComponent', () => {
  let component: ZoneTagComponent;
  let fixture: ComponentFixture<ZoneTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
