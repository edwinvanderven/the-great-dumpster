import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoronaService } from './corona.service';

describe('CoronaService', () => {
  let service: CoronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
