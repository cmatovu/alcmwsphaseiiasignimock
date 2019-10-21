import { Injectable } from '@angular/core';
import { MoviehttpserviceService } from './moviehttpservice.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesearchRevolverService implements Resolve <any>{

  
  constructor(private movieservice: MoviehttpserviceService)  { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.movieservice.searchMovies(route.params['searchTerm'])
  }

}
