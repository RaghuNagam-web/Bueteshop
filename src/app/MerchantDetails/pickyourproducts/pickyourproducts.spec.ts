import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pickyourproducts } from './pickyourproducts';

describe('Pickyourproducts', () => {
  let component: Pickyourproducts;
  let fixture: ComponentFixture<Pickyourproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pickyourproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pickyourproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
