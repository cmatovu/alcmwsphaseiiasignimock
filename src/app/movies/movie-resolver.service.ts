import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MoviehttpserviceService } from './moviehttpservice.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService  implements Resolve<any>{

  constructor(private movieservice: MoviehttpserviceService,
    private route: ActivatedRouteSnapshot) { }

  resolve() {
 //   return this.movieservice.getMovie(1)
    return this.movieservice.getMovie(this.route.params['id'])
   // return this.movieService.getMovies();

  }


}
