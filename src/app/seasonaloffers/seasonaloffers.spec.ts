import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seasonaloffers } from './seasonaloffers';

describe('Seasonaloffers', () => {
  let component: Seasonaloffers;
  let fixture: ComponentFixture<Seasonaloffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seasonaloffers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seasonaloffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
