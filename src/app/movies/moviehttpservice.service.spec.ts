import { TestBed } from '@angular/core/testing';

import { MoviehttpserviceService } from './moviehttpservice.service';

describe('MoviehttpserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviehttpserviceService = TestBed.get(MoviehttpserviceService);
    expect(service).toBeTruthy();
  });
});
