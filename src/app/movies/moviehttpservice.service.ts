import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IMovie } from './shared/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviehttpserviceService {

  constructor(private http: HttpClient) { }
  
  getMovies(): Observable<IMovie[]>  {
    return this.http.get<IMovie[]>('/api/movies')
//    return this.http.get<IMovie[]>('/api')
//        return this.http.get<IMovie[]>('http://localhost/alcmoviewww/movies.php')
    .pipe(catchError(this.handleError<IMovie[]> ('getMovies', [])))
  }
  getMovie(id:number)  {
    //return CMMOVIES.find(movie => movie.movie_id === id)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable <T> => {
      console.error(error);
      alert('error');
      return of(result as T);
    }
  }
}
