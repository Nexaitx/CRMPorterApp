import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancePricing } from './finance-pricing';

describe('FinancePricing', () => {
  let component: FinancePricing;
  let fixture: ComponentFixture<FinancePricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancePricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancePricing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
