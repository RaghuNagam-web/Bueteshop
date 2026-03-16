import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seasonaloffersupload } from './seasonaloffersupload';

describe('Seasonaloffersupload', () => {
  let component: Seasonaloffersupload;
  let fixture: ComponentFixture<Seasonaloffersupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seasonaloffersupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seasonaloffersupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
