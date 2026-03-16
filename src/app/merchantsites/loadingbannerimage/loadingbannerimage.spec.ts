import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadingbannerimage } from './loadingbannerimage';

describe('Loadingbannerimage', () => {
  let component: Loadingbannerimage;
  let fixture: ComponentFixture<Loadingbannerimage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loadingbannerimage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loadingbannerimage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
