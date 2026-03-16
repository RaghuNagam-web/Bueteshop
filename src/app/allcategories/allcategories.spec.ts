import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allcategories } from './allcategories';

describe('Allcategories', () => {
  let component: Allcategories;
  let fixture: ComponentFixture<Allcategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allcategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allcategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
