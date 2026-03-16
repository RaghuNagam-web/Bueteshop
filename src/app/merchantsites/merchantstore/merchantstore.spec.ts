import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantstore } from './merchantstore';

describe('Merchantstore', () => {
  let component: Merchantstore;
  let fixture: ComponentFixture<Merchantstore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchantstore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchantstore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
