import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Missingcashback } from './missingcashback';

describe('Missingcashback', () => {
  let component: Missingcashback;
  let fixture: ComponentFixture<Missingcashback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missingcashback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Missingcashback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
