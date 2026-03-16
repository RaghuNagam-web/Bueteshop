import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Referalmerchantpage } from './referalmerchantpage';

describe('Referalmerchantpage', () => {
  let component: Referalmerchantpage;
  let fixture: ComponentFixture<Referalmerchantpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Referalmerchantpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Referalmerchantpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
