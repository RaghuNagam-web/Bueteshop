import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Savemerchantstore } from './savemerchantstore';

describe('Savemerchantstore', () => {
  let component: Savemerchantstore;
  let fixture: ComponentFixture<Savemerchantstore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Savemerchantstore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Savemerchantstore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
