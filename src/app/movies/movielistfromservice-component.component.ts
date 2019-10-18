import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from './shared/movieservice.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
declare let toastr
@Component({
  selector: 'app-movielistfromservice-component',
  templateUrl: './movielistfromservice-component.component.html',
  styleUrls: ['./movielistfromservice-component.component.css']
})
export class MovielistfromserviceComponentComponent implements OnInit {
  movies: any

  constructor(private movieService: MovieserviceService) { 

  }

  
  handlemovie_details(data)   {
    console.log("received: " + data)
    alert("received: " + data)
    toastr.success(data)
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
