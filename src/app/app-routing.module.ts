import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailComponent } from './tvdetail/tvdetail.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'tv',component:TvComponent},
{path:'moviedetail/:id',component:MoviedetailComponent},
{path:'tvdetail/:id',component:TvdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
