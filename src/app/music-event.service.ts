import { Injectable } from '@angular/core';
import { MusicEvent } from './MusicEvent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicEventService {

  constructor(private http: HttpClient) { }

  GetMusicEvents(): Observable<MusicEvent[]> {
    return this.http.get<MusicEvent[]>('http://localhost:8080/api/values');
  }

  GetMusicEvent(id: number) : Observable<MusicEvent> {
    return this.http.get<MusicEvent>('http://localhost:8080/api/values/' + id);
  }

  AddMusicEvent(musicevent: MusicEvent) {
    this.http.post('http://localhost:8080/api/values/','brol');
    console.log(musicevent);
  }
}
