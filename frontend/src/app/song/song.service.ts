import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private _httpClient:HttpClient) {  }
  private base = "/api/v1/routes"

// alle Lider
getAllSongs():Observable<Song[]>{
  return this._httpClient.get<Song[]>(`${this.base}`)
}

// nach Jahreszahl irgentwie
getNachJahr(year:Number):Observable<Song[]>{
  return this._httpClient.get<Song[]>(`${this.base}/${year}`)
}
// create
create(data:Song){
  return this._httpClient.post<Song[]>(`${this.base}`,data)
}
//delete
delete(year:Song){
  return this._httpClient.delete<Song[]>(`${this.base}/${year}`)
}

//updaten
update(data:Song){
  return this._httpClient.put<Song[]>(`${this.base}/${data.year}`,data)
}

}
