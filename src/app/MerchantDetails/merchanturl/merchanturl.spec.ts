import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchanturl } from './merchanturl';

describe('Merchanturl', () => {
  let component: Merchanturl;
  let fixture: ComponentFixture<Merchanturl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchanturl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchanturl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
