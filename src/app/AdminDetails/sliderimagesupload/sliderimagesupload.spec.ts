import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sliderimagesupload } from './sliderimagesupload';

describe('Sliderimagesupload', () => {
  let component: Sliderimagesupload;
  let fixture: ComponentFixture<Sliderimagesupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sliderimagesupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sliderimagesupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
