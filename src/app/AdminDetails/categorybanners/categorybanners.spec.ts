import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorybanners } from './categorybanners';

describe('Categorybanners', () => {
  let component: Categorybanners;
  let fixture: ComponentFixture<Categorybanners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorybanners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorybanners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
