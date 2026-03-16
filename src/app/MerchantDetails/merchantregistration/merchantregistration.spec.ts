import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantregistration } from './merchantregistration';

describe('Merchantregistration', () => {
  let component: Merchantregistration;
  let fixture: ComponentFixture<Merchantregistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantregistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantregistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
