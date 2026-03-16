import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantstoreproducts } from './merchantstoreproducts';

describe('Merchantstoreproducts', () => {
  let component: Merchantstoreproducts;
  let fixture: ComponentFixture<Merchantstoreproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantstoreproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantstoreproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
