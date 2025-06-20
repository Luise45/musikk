import { Component, OnInit } from '@angular/core';
import { SongService } from './song/song.service';
import { Song } from './song/song';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
 
})


export class AppComponent implements OnInit {
  songs: Song[] = []; 

constructor(private songService: SongService){}
ngOnInit(): void {
  this.songService.getAllSongs().subscribe({
    next: (data) => {
      this.songs = data;
      console.log('songs loaded:', data);
    },
    error:(err) => {
      console.error('Error laoding songs:', err)
    }
  });
}
}
