import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies=[];
  imgperfix='https://image.tmdb.org/t/p/w500/';
  constructor( public _MoviesService:MoviesService) { 
    _MoviesService.getTrendingMovies().subscribe((Data)=>{
      this.trendingMovies=Data.results
      console.log(this.trendingMovies)
    },(err)=>{console.log(err)},)
  }

  ngOnInit(): void {
  }
    
}
