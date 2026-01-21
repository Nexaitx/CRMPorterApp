import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderManagement } from './rider-management';

describe('RiderManagement', () => {
  let component: RiderManagement;
  let fixture: ComponentFixture<RiderManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiderManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
