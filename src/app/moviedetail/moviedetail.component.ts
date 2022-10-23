import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import {MoviesService}from '../movies.service'

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  id:any;
  movie:any;
  imgperfix='https://image.tmdb.org/t/p/w500/';
  isloading:boolean=false;
  topten:any=[]
  constructor(public _ActivatedRoute:ActivatedRoute ,public MoviesService:MoviesService) {
    this.id= _ActivatedRoute.snapshot.paramMap.get('id')

    MoviesService.getMovieDetails(this.id).subscribe(data=>{
      this.movie=data
      this.isloading=true
    })
    
    MoviesService.getTrendingMovies().subscribe(movies=>{
      for(let i=0;i<10;i++){
        this.topten.push(movies.results[i])
      }
    })
   }
  ngOnInit(): void {
  }

}
