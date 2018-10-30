import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespirationRateComponent } from './respiration-rate.component';

describe('RespirationRateComponent', () => {
  let component: RespirationRateComponent;
  let fixture: ComponentFixture<RespirationRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespirationRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespirationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
