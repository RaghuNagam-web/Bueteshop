import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantlogin } from './merchantlogin';

describe('Merchantlogin', () => {
  let component: Merchantlogin;
  let fixture: ComponentFixture<Merchantlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
