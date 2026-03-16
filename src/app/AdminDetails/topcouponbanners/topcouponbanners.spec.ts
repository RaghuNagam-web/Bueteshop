import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topcouponbanners } from './topcouponbanners';

describe('Topcouponbanners', () => {
  let component: Topcouponbanners;
  let fixture: ComponentFixture<Topcouponbanners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topcouponbanners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topcouponbanners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
