import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termsofservices } from './termsofservices';

describe('Termsofservices', () => {
  let component: Termsofservices;
  let fixture: ComponentFixture<Termsofservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termsofservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Termsofservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
