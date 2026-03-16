import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerimagesupload } from './bannerimagesupload';

describe('Bannerimagesupload', () => {
  let component: Bannerimagesupload;
  let fixture: ComponentFixture<Bannerimagesupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerimagesupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerimagesupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
