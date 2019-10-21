import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IMovie } from './shared/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviehttpserviceService {

  cm_httpoptions =
  {
    //method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  };

  //movies: IMovie[];

  constructor(private http: HttpClient) { }
  
 // getMovies(): Observable<IMovie[]>  {
 //   return this.http.get<IMovie[]>('http://localhost/alcmoviewww/movies.php')
 //   .pipe(catchError(this.handleError<IMovie[]> ('getMovies', [])))
 // }
 // search movies
 searchMovies(searchTearm: string): Observable<IMovie[]>  {
  return this.http.get<IMovie[]>('http://localhost/alcmoviewww/searchmovies.php?searchTerm=' + searchTearm)
  .pipe(catchError(this.handleError<IMovie[]> ('searchMovies', [])))
}
// get all movies
getMovies(): Observable<IMovie[]>  {
  return this.http.get<IMovie[]>('http://localhost/alcmoviewww/getmovies.php')
  .pipe(catchError(this.handleError<IMovie[]> ('getMovies', [])))
}
// get one movie
getMovie(id:number) :  Observable<IMovie>  {
    return this.http.get<IMovie>('http://localhost/alcmoviewww/getmovie.php?id=' + id)
    .pipe(catchError(this.handleError<IMovie> ('getMovie')))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable <T> => {
      console.error(error);
      alert('error ' + result);
      return of(result as T);
    }
  }
}
