import { Component, OnInit } from '@angular/core';
import { MoviehttpserviceService } from './moviehttpservice.service';
import { IMovie } from './shared/movie.model';
import { ActivatedRoute } from '@angular/router';
//import { IMovie } from './shared';

@Component({
  selector: 'app-movielistfromhttpservice',
  templateUrl: './movielistfromhttpservice.component.html',
  styleUrls: ['./movielistfromhttpservice.component.css']
})
export class MovielistfromhttpserviceComponent implements OnInit {

 // movies: IMovie[]
  movies: any
  
  constructor(private movieService:MoviehttpserviceService,
    private route: ActivatedRoute) { 

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
    this.movies = this.route.snapshot.data['movies']
  console.log('At Component Movies are ' + this.movies );

  }

}
