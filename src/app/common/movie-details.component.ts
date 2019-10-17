import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movies/shared/movieservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedmovie:any

  constructor(private movieService: MovieserviceService,
    private route:ActivatedRoute) {
    //movie:any
   }

  ngOnInit() {
    this.selectedmovie =  this.movieService.getMovie(
      +this.route.snapshot.params['id']
    );
  }

}
