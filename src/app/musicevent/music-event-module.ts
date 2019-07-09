import { NgModule } from '@angular/core';
import { AddMusicEventComponent } from './add-music-event/add-music-event.component';
import { MusicEventDetailsComponent } from './music-event-details/music-event-details.component';
import { MusicEventComponent } from './music-event/music-event.component';
import { MusicEventListComponent } from './music-event-list/music-event-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { PriceRangePipe } from '../price-range.pipe';

@NgModule({
  declarations: [
    MusicEventComponent,
    MusicEventListComponent,
    AddMusicEventComponent,
    MusicEventDetailsComponent,
    PriceRangePipe
  ],
  imports: [
    RouterModule.forChild([{
      path: 'home', component: MusicEventListComponent
    }, {
      path: 'event/add', component: AddMusicEventComponent
    }, {
      path: 'event/:id', component: MusicEventDetailsComponent
    }]),
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MusicEventModule {

}
