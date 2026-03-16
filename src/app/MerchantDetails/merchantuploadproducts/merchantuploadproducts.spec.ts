import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantuploadproducts } from './merchantuploadproducts';

describe('Merchantuploadproducts', () => {
  let component: Merchantuploadproducts;
  let fixture: ComponentFixture<Merchantuploadproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantuploadproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantuploadproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
