import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestofferbanners } from './bestofferbanners';

describe('Bestofferbanners', () => {
  let component: Bestofferbanners;
  let fixture: ComponentFixture<Bestofferbanners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestofferbanners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bestofferbanners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
