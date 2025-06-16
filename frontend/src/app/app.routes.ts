import { Routes } from '@angular/router';
import { HomeComponent } from './song/home/home.component';





export const routes: Routes = [
    {
    path: 'song/home', loadComponent: () => import('./song/home/home.component').then(m => m.HomeComponent)},

{path:"song", redirectTo:"song/home", pathMatch:"full"},
{path:"", redirectTo:"song/home", pathMatch:'full'}


];
{
   
  }
  