import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../song';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent implements OnInit {
  songs: Song[] = [];

  song:Song ={

    year:0,
    name:'',
    author:''
  }
constructor(private songService:SongService,private router:Router, private route:ActivatedRoute){}
 

ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      let year=Number(params.get('year'));
this.getNachJahr(year)
    
})
    
}

getNachJahr(year: Number) {
  this.songService.getNachJahr(year).subscribe((data: Song[]) => {
    this.songs = data;
  });
}



update(){
this.songService.update(this.song).subscribe({

next:(data) => {

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
