import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MoviehttpserviceService } from './moviehttpservice.service';
import { IMovie } from './shared/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolverService implements Resolve <any> {

  constructor(private movieService: MoviehttpserviceService) { }
  resolve(){
    return this.movieService.getMovies();
/******** 
const cm_movies: IMovie[] =  
    [{"movie_id":1,"movie_tittle":"Diamonds Are Forever - James Bond","movie_year":1977,
  "movie_UrlImage":"Diamonds_are_forever.png","movie_Rated":"PG","movie_Released":"1977A",
  "movie_Runtime":"30 mins","movie_Genre":"X","movie_Director":"Slvestor Stallone",
  "movie_Writer":"Johnson","movie_Actors":"Swaznigger, Nightangle",
  "movie_Plot":" Invade virg teritory..","movie_Language":"English",
  "movie_Country":"USA","movie_Awards":"None"},
  {"movie_id":13,"movie_tittle":"Bad Girls - Jim Grant","movie_year":1981,
  "movie_UrlImage":"Bad_girls.png","movie_Rated":"PG","movie_Released":"1981B",
  "movie_Runtime":"70 mins","movie_Genre":"X","movie_Director":"Swazinigger",
  "movie_Writer":"Johnson","movie_Actors":"Swaznigger, Nightangle",
  "movie_Plot":" Invade Bars..","movie_Language":"English","movie_Country":"UK","movie_Awards":"None"}]

  return cm_movies;
  ********/
    
  }
}
