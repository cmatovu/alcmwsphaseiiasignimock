import { TestBed } from '@angular/core/testing';

import { MovieListResolverService } from './movie-list-resolver.service';

describe('MovieListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieListResolverService = TestBed.get(MovieListResolverService);
    expect(service).toBeTruthy();
  });
});
