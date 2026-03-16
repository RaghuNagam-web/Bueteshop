import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerreview } from './customerreview';

describe('Customerreview', () => {
  let component: Customerreview;
  let fixture: ComponentFixture<Customerreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customerreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
