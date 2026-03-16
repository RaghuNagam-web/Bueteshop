import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popularity } from './popularity';

describe('Popularity', () => {
  let component: Popularity;
  let fixture: ComponentFixture<Popularity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popularity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Popularity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
