import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantbreadcrumb } from './merchantbreadcrumb';

describe('Merchantbreadcrumb', () => {
  let component: Merchantbreadcrumb;
  let fixture: ComponentFixture<Merchantbreadcrumb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantbreadcrumb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantbreadcrumb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
