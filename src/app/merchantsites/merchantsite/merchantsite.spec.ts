import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantsite } from './merchantsite';

describe('Merchantsite', () => {
  let component: Merchantsite;
  let fixture: ComponentFixture<Merchantsite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantsite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantsite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
