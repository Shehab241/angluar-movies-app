import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {

   }
  getTrendingMovies():Observable<any> 
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=04fa8821c6f4df2cbbace12c86eaf937")
  }
  
  getTrendingTv():Observable<any> 
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=04fa8821c6f4df2cbbace12c86eaf937")
  }

  getMovieDetails(id: any):Observable<any> 
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=04fa8821c6f4df2cbbace12c86eaf937&language=en-US`)
  }
  getTVDetails(id: any):Observable<any> 
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=04fa8821c6f4df2cbbace12c86eaf937&language=en-US`)
  }

}
