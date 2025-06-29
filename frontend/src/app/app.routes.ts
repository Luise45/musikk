import { Routes } from '@angular/router';
import { HomeComponent } from './song/home/home.component';
import { CreateComponent } from './song/create/create.component';
import { EditComponent } from './song/edit/edit.component';


export const routes: Routes = [
    { path:"song/home",component:HomeComponent},
{path:"song", redirectTo:"song/home", pathMatch:"full"},
{path:"", redirectTo:"song/home", pathMatch:'full'},
{path:"song/create", component:CreateComponent},
{path:"song/edit/:year", component:EditComponent}


];
