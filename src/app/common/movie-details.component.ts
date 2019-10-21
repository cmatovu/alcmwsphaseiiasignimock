import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovie } from '../movies/shared';
import { MoviehttpserviceService } from '../movies/moviehttpservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:IMovie
 addMode: boolean

 //constructor(private movieService: MovieserviceService,
  constructor(private movieService: MoviehttpserviceService,
    private route:ActivatedRoute) {
    //movie:any
   }

  ngOnInit() {
   // );
   this.movie = this.route.snapshot.data['movie']
//   this.route.data.forEach((data) =>  {
//       this.movie = data['movie'];
//       this.addMode = false;
       // debug
      // alert(" Getting details for: " + data['movie']);
//   })
  }

}
