import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Song } from '../song';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongModule } from '../song.module';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SongModule, RouterLink],
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit{
  
  songs: Song[]=[];
  filteredSongs:Song[]=[];
  sortProperty:String='name';
  sortSong:number=1;

  constructor(private songService:SongService){}

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe((data) => {
      this.songs = data;
      this.filteredSongs=data;
    });
  }

  delete(year: Song) {
    this.songService.delete(year).subscribe(() => {
      this.songs = this.songs.filter(item => item.year !== year.year);
    });
  }


  filterSong(input:String) {
   
    this.filteredSongs = this.songs.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase()) || item.author.toLowerCase().includes(input.toLowerCase()) || item.year.toString().includes(input.toLowerCase())
    )}


    sortBy(value:string){
      this.sortSong=value===this.sortProperty?(this.sortSong*-1):1;
      this.sortProperty=value;
      this.filteredSongs=[...this.songs.sort((a:any, b:any)=>{

        let results=0;
        if(a[value]<b[value]){
          results=-1
        }
        if(a[value]>b[value]){
          results=-1
        }
        return (results*this.sortSong);
      })]
  }
}
