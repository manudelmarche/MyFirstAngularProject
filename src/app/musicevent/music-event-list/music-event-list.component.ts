import { Component, OnInit } from '@angular/core';
import { MusicEventService } from '../../music-event.service';
import { MusicEvent } from '../../MusicEvent';

@Component({
  selector: 'app-music-event-list',
  templateUrl: './music-event-list.component.html',
  styleUrls: ['./music-event-list.component.scss']
})
export class MusicEventListComponent implements OnInit {
  musicevents: MusicEvent[];

  constructor(private musicEventService: MusicEventService) { }

  ngOnInit() {
    this.musicEventService.GetMusicEvents().subscribe((value: MusicEvent[])=>{
      this.musicevents=value;
    });
  }

}
