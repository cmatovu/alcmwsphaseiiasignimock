import { TestBed } from '@angular/core/testing';

import { MoviesearchRevolverService } from './moviesearch-revolver.service';

describe('MiviesearchRevolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesearchRevolverService = TestBed.get(MoviesearchRevolverService);
    expect(service).toBeTruthy();
  });
});
