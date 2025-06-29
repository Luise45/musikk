import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    SongRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class SongModule { }
