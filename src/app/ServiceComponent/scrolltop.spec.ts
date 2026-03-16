import { TestBed } from '@angular/core/testing';
import { Scrolltop } from './scrolltop';



describe('Scrolltop', () => {
  let service: Scrolltop;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scrolltop);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
