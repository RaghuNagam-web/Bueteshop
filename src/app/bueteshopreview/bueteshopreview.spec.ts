import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bueteshopreview } from './bueteshopreview';

describe('Bueteshopreview', () => {
  let component: Bueteshopreview;
  let fixture: ComponentFixture<Bueteshopreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bueteshopreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bueteshopreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
