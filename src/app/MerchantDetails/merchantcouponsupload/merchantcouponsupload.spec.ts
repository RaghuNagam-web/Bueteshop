import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantcouponsupload } from './merchantcouponsupload';

describe('Merchantcouponsupload', () => {
  let component: Merchantcouponsupload;
  let fixture: ComponentFixture<Merchantcouponsupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantcouponsupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantcouponsupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
