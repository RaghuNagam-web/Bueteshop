import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productapproval } from './productapproval';

describe('Productapproval', () => {
  let component: Productapproval;
  let fixture: ComponentFixture<Productapproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productapproval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productapproval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
