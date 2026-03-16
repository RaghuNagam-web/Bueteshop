import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantdashboard } from './merchantdashboard';

describe('Merchantdashboard', () => {
  let component: Merchantdashboard;
  let fixture: ComponentFixture<Merchantdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantdashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
