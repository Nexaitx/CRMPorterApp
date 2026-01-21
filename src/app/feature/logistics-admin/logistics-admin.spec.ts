import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsAdmin } from './logistics-admin';

describe('LogisticsAdmin', () => {
  let component: LogisticsAdmin;
  let fixture: ComponentFixture<LogisticsAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
