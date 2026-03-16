import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myearnings } from './myearnings';

describe('Myearnings', () => {
  let component: Myearnings;
  let fixture: ComponentFixture<Myearnings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myearnings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myearnings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
