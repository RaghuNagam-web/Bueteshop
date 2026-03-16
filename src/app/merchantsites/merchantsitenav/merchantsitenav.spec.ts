import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantsitenav } from './merchantsitenav';

describe('Merchantsitenav', () => {
  let component: Merchantsitenav;
  let fixture: ComponentFixture<Merchantsitenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantsitenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantsitenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
