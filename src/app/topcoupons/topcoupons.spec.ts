import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topcoupons } from './topcoupons';

describe('Topcoupons', () => {
  let component: Topcoupons;
  let fixture: ComponentFixture<Topcoupons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topcoupons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topcoupons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
