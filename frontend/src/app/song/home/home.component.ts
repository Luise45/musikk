import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Song } from '../song';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongModule } from '../song.module';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  
  
  imports: [CommonModule, ReactiveFormsModule, FormsModule,SongModule,RouterLink],
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit{
  songs: Song[]=[];
  constructor(private songService:SongService){}

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe((data) => {
      this.songs = data;
    });
  }
  
  
}
