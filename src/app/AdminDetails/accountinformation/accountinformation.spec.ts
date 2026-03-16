import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountinformation } from './accountinformation';

describe('Accountinformation', () => {
  let component: Accountinformation;
  let fixture: ComponentFixture<Accountinformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accountinformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accountinformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
