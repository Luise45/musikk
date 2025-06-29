import { Component, OnInit } from '@angular/core';
import { SongService } from './song/song.service';
import { Song } from './song/song';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule,FormsModule],  
  templateUrl: './app.component.html'
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
