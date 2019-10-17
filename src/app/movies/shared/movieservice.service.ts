import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor() { }

  getMovies()  {
    return CMMOVIES;
  }
  getMovie(id:number)  {
    return CMMOVIES.find(movie => movie.movie_id === id)
  }
}
const CMMOVIES  = [
  {
    movie_id: 1,
    movie_tittle: "Diamonds Are Forever - James Bond",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 2,
    movie_tittle: "Rambo4",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 3,
    movie_tittle: "XMen 3",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 4,
    movie_tittle: "Bibawo - Ebonies",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 5,
    movie_tittle: "Fly Octopus",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 6,
    movie_tittle: "Big Men Dont Cry",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 7,
    movie_tittle: "English Babies- Charlie Chaplain",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  },
  {
    movie_id: 8,
    movie_tittle: "Naughty Girls",
    movie_year: 1977,
    movie_UrlImage: "Diamonds_are_forever.png",
    movie_Rated: "PG",  
    movie_Released: "1977",  
    movie_Runtime: "30 mins",  
    movie_Genre: "X",  
    movie_Director: "Slvestor Stallone",  
    movie_Writer: "Johnson",  
    movie_Actors: "Swaznigger, Nightangle",  
    movie_Plot: " Invade virg teritory..",  
    movie_Language: "English",  
    movie_Country: "USA",  
    movie_Awards: "None" 
  }
            ]

