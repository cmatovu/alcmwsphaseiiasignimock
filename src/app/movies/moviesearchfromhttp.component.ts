import { Component, OnInit } from '@angular/core';
import { MoviehttpserviceService } from './moviehttpservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviesearchfromhttp',
  templateUrl: './moviesearchfromhttp.component.html',
  styleUrls: ['./moviesearchfromhttp.component.css']
})
export class MoviesearchfromhttpComponent implements OnInit {

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
