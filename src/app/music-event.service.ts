import { Injectable } from '@angular/core';
import { MusicEvent } from './MusicEvent';

@Injectable({
  providedIn: 'root'
})
export class MusicEventService {

   events: MusicEvent[] = [{
    id: 0,
    name: 'LowLands',
    date: new Date('04/07/2019'),
    price: 22,
    description: 'Legendary artists from all over the world blah...',
    imageSrc: 'https://d49r1np2lhhxv.cloudfront.net/www/admin/uploads/images/Top50MusicFestivalsintheWorld_UMF.jpg',
    },
    {
      id: 1,
      name: 'MidLands',
      date: new Date('04/09/2019'),
      price: 15,
      description: 'Amateur electro artists',
      imageSrc: 'https://d49r1np2lhhxv.cloudfront.net/www/admin/uploads/images/Top15FestivalsUSA_EDCLasVegas.jpg',
    },
    {
      id: 2,
      name: 'HighLands',
      date: new Date('04/08/2019'),
      price: 55,
      description: 'Loads of boom-boom',
      imageSrc: 'https://s29745.pcdn.co/wp-content/uploads/2018/09/41580112_10156173992978025_4013920836766400512_o.jpg.optimal.jpg',
    },
    {
      id: 3,
      name: 'Tommorow Land',
      date: new Date('04/10/2019'),
      price: 115,
      description: 'Commercially spoiled event',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tomorrowland_2017.jpg/1600px-Tomorrowland_2017.jpg',
    },
    {
      id: 4,
      name: 'White sensations',
      date: new Date('04/11/2019'),
      price: 15,
      description: 'Everybody in white!',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Sensationwhite_2007.JPG',
    }];



  constructor() { }

  GetMusicEvents(): MusicEvent[] {
    return this.events;
  }

  GetMusicEvent(id: number) : MusicEvent {
    return this.events.find(item => item.id===id);
  }

}
