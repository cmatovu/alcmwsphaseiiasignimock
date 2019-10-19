import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Movie_iconComponent } from './movies/movie_icon.component';
import { MoviesComponent } from './movies/movies.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovielistfromserviceComponentComponent } from './movies/movielistfromservice-component.component';
import { MovieserviceService } from './movies/shared/movieservice.service';
import { MovieDetailsComponent } from './common/movie-details.component';
import { appRoutes} from './nav-bar/routes';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MoviehttpserviceService } from './movies/moviehttpservice.service';
import { MovielistfromhttpserviceComponent } from './movies/movielistfromhttpservice.component';
import { MovieListResolverService } from './movies/movie-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    Movie_iconComponent,
    MovielistfromhttpserviceComponent,
    MoviesComponent,
    NavBarComponent,
    MovielistfromserviceComponentComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    MovieserviceService,
    MoviehttpserviceService,
    MovieListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
