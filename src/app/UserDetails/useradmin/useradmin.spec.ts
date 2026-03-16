import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Useradmin } from './useradmin';

describe('Useradmin', () => {
  let component: Useradmin;
  let fixture: ComponentFixture<Useradmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Useradmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Useradmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
