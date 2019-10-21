import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Movie_iconComponent } from './movies/movie_icon.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieDetailsComponent } from './common/movie-details.component';
import { appRoutes} from './nav-bar/routes';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MoviehttpserviceService } from './movies/moviehttpservice.service';
import { MovielistfromhttpserviceComponent } from './movies/movielistfromhttpservice.component';
import { MovieListResolverService } from './movies/movie-list-resolver.service';
import { MovieResolverService } from './movies/movie-resolver.service';
import { MoviesearchfromhttpComponent } from './movies/moviesearchfromhttp.component';
import { MoviesearchRevolverService } from './movies/moviesearch-revolver.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    Movie_iconComponent,
    MovielistfromhttpserviceComponent,
    NavBarComponent,
    MovieDetailsComponent,
    MoviesearchfromhttpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,   
    FormsModule 
  ],
  providers: [
    MoviehttpserviceService,
    MovieListResolverService,
    MovieResolverService,
    MoviesearchRevolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
