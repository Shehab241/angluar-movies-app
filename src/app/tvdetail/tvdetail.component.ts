import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import {MoviesService}from '../movies.service'


@Component({
  selector: 'app-tvdetail',
  templateUrl: './tvdetail.component.html',
  styleUrls: ['./tvdetail.component.scss']
})
export class TvdetailComponent implements OnInit {
  id:any;
  tv:any;
  imgperfix='https://image.tmdb.org/t/p/w500/';
  isloading:boolean=false;
  topTen:any=[]
  constructor(public _ActivatedRoute:ActivatedRoute,public _movies:MoviesService) { 
    this.id=_ActivatedRoute.snapshot.paramMap.get('id')
    _movies.getTVDetails(this.id).subscribe(data=>{
      this.tv=data;
      this.isloading=true
    })
    _movies.getTrendingTv().subscribe(tv=>{
      for(let i=0;i<10;i++){
        this.topTen.push(tv.results[i])
      }
    })
  }

  ngOnInit(): void {
  }

}
