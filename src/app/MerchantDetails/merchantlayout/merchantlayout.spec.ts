import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantlayout } from './merchantlayout';

describe('Merchantlayout', () => {
  let component: Merchantlayout;
  let fixture: ComponentFixture<Merchantlayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantlayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantlayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
