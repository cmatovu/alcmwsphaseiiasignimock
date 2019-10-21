import { Routes } from '@angular/router'
import { MovieListResolverService } from '../movies/movie-list-resolver.service'
import { MovielistfromhttpserviceComponent } from '../movies/movielistfromhttpservice.component'
import { MovieDetailsComponent } from '../common/movie-details.component'
import { MovieResolverService } from '../movies/movie-resolver.service'
import { MoviesearchfromhttpComponent } from '../movies/moviesearchfromhttp.component'
import { MoviesearchRevolverService } from '../movies/moviesearch-revolver.service'
//import { from } from 'rxjs'

export const appRoutes:Routes = [
 //   { path: 'movies', component: MovielistfromserviceComponentComponent},
    { path: 'movies', component: MovielistfromhttpserviceComponent,
     resolve: {movies: MovieListResolverService} },
     { path: 'movies/:id', component: MovieDetailsComponent,
     resolve: {movie: MovieResolverService}},
     { path: 'movies/:searchTerm', component: MoviesearchfromhttpComponent,
     resolve: {movies: MoviesearchRevolverService}},
      { path: '', redirectTo: '/movies', pathMatch: 'full'}
]