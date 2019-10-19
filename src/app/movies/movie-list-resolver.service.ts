import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MoviehttpserviceService } from './moviehttpservice.service';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolverService implements Resolve <any> {

  constructor(private movieService: MoviehttpserviceService) { }
  resolve(){
//    return this.movieService.getMovies().subscribe();
    return this.movieService.getMovies();
  }
}
