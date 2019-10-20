import { Routes } from '@angular/router'
import { MovieListResolverService } from '../movies/movie-list-resolver.service'
import { MovielistfromhttpserviceComponent } from '../movies/movielistfromhttpservice.component'
import { MoviesComponent } from '../movies/movies.component'
import { MovieDetailsComponent } from '../common/movie-details.component'
import { MovielistfromserviceComponentComponent } from '../movies/movielistfromservice-component.component'
import { MoviehttpserviceService } from '../movies/moviehttpservice.service'
//import { from } from 'rxjs'

export const appRoutes:Routes = [
 //   { path: 'movies', component: MovielistfromserviceComponentComponent},
    { path: 'movies', component: MovielistfromhttpserviceComponent,
     resolve: {movies: MovieListResolverService} },
    { path: 'movies/:id', component: MovieDetailsComponent},
    { path: '', redirectTo: '/movies', pathMatch: 'full'}
]