import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Referaluserpage } from './referaluserpage';

describe('Referaluserpage', () => {
  let component: Referaluserpage;
  let fixture: ComponentFixture<Referaluserpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Referaluserpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Referaluserpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
