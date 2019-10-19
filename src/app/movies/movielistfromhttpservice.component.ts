import { Component, OnInit } from '@angular/core';
import { MoviehttpserviceService } from './moviehttpservice.service';

@Component({
  selector: 'app-movielistfromhttpservice',
  templateUrl: './movielistfromhttpservice.component.html',
  styleUrls: ['./movielistfromhttpservice.component.css']
})
export class MovielistfromhttpserviceComponent implements OnInit {

  movies: any
  
  constructor(private movieService:MoviehttpserviceService) { 

  }

  
  handlemovie_details(data)   {
    console.log("received: " + data)
    alert("received: " + data)
   // toastr.success(data)
//    this.outputmovie_details.emit("Details clicked")
}

handlefavorite_movie(data)   {
  console.log("received: " + data)
  alert("received: " + data)
  // this.outputmovie_favorite.emit("Favorite clicked")
}



  ngOnInit() {
//    this.movies = this.movies.getMovies();
    this.movies = this.movieService.getMovies();

  }

}
