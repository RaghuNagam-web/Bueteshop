import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannersupload } from './bannersupload';

describe('Bannersupload', () => {
  let component: Bannersupload;
  let fixture: ComponentFixture<Bannersupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannersupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannersupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
