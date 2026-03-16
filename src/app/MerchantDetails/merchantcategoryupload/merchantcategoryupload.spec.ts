import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantcategoryupload } from './merchantcategoryupload';

describe('Merchantcategoryupload', () => {
  let component: Merchantcategoryupload;
  let fixture: ComponentFixture<Merchantcategoryupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantcategoryupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantcategoryupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
