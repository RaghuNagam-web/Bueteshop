import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantadmin } from './merchantadmin';

describe('Merchantadmin', () => {
  let component: Merchantadmin;
  let fixture: ComponentFixture<Merchantadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantadmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantadmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
