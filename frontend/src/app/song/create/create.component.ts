import { Component } from '@angular/core';
import { Song } from '../song';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SongService } from '../song.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  song:Song ={

    year:0,
    name:'',
    author:''
  }

constructor(private songService:SongService, private router:Router){}

create(){
  this.songService.create(this.song).subscribe({
    next:(data)=>{

      this.router.navigate(["song/home"]);
    },
    error:(err)=>{
      console.log(err);
    }
  })

}
cancel(){
  this.router.navigate(["song/home"]);
}

}
