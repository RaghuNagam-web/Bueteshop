import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couponsapproval } from './couponsapproval';

describe('Couponsapproval', () => {
  let component: Couponsapproval;
  let fixture: ComponentFixture<Couponsapproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Couponsapproval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couponsapproval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
