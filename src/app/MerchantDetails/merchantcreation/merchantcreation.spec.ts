import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantcreation } from './merchantcreation';

describe('Merchantcreation', () => {
  let component: Merchantcreation;
  let fixture: ComponentFixture<Merchantcreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantcreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantcreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
