import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsPartComponent } from './measurements-part.component';

describe('MeasurementsPartComponent', () => {
  let component: MeasurementsPartComponent;
  let fixture: ComponentFixture<MeasurementsPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementsPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
