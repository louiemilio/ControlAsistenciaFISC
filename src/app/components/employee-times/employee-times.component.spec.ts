import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimesComponent } from './employee-times.component';

describe('EmployeeTimesComponent', () => {
  let component: EmployeeTimesComponent;
  let fixture: ComponentFixture<EmployeeTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
