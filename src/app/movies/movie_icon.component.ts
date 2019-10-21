import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviehttpserviceService } from './moviehttpservice.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-movie_icon',
 // templateUrl: './movie_icon.component.html',
  template: `
  <div class="cmbgcolor">
  <h4>{{movieicon.movie_id}}</h4>
  <h4>{{movieicon.movie_tittle}}</h4>
<h4>{{movieicon.movie_year}}</h4>
<h4>{{movieicon.movie_UrlImage}}</h4>  
</div>
<button (click) = "cmshowmovie_details()"> Details </button>
<button (click) = "cmfavorite_movie()"> Favorite </button>
  `,
//  styleUrls: ['./movies.component.css']
  styleUrls: ['./movie_icon.component.css']

// styles: [`.cmbgcolor { background-color: #ff00ff;}`]
})
export class Movie_iconComponent implements OnInit {

  constructor() { }
  @Input() movieicon: any
  @Output() outputmovie_details = new EventEmitter();
  @Output() outputmovie_favorite = new EventEmitter();

  cmshowmovie_details()   {
    //    console.log("Details clicked")
        this.outputmovie_details.emit("Details clicked: " + this.movieicon.movie_tittle)
    }
    
    cmfavorite_movie()   {
     //   console.log("Favorite clicked")
       this.outputmovie_favorite.emit("Favorite clicked: " + this.movieicon.movie_tittle)
    }

    someproperty: any = "some property"

    cmvariable_movie()
    {
      console.log("Variable movie details clicked")
    }
    
      ngOnInit() {

  }

}
