import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pickproducts } from './pickproducts';

describe('Pickproducts', () => {
  let component: Pickproducts;
  let fixture: ComponentFixture<Pickproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pickproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pickproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
