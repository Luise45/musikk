import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  getByYear(year: Number) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient:HttpClient) {  }
  private baseUrl = "/api/v1/data";//!!!!!!

 
// alle Lider
getAllSongs():Observable<Song[]>{
  return this._httpClient.get<Song[]>(`${this.baseUrl}`)
}

// nach Jahreszahl irgentwie
getNachJahr(year:Number):Observable<Song[]>{
  return this._httpClient.get<Song[]>(`${this.baseUrl}/${year}`)
}
// create
create(data:Song){
  return this._httpClient.post<Song[]>(`${this.baseUrl}`,data)
}
//delete
delete(year:Song){
  return this._httpClient.delete<Song[]>(`${this.baseUrl}/${year}`)
}

//updaten
update(data:Song){
  return this._httpClient.put<Song[]>(`${this.baseUrl}/${data.year}`,data)
}

}
