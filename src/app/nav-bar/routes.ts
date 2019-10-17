import { Routes } from '@angular/router'
import { MoviesComponent } from '../movies/movies.component'
import { MovieDetailsComponent } from '../common/movie-details.component'
import { MovielistfromserviceComponentComponent } from '../movies/movielistfromservice-component.component'
//import { from } from 'rxjs'

export const appRoutes:Routes = [
    { path: 'movies', component: MovielistfromserviceComponentComponent},
    { path: 'movies/:id', component: MovieDetailsComponent},
    { path: '', redirectTo: '/movies', pathMatch: 'full'}
]