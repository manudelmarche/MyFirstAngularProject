import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatCardModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MusicEventModule } from './musicevent/music-event-module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forRoot([{
      path: 'login', loadChildren: './loginmodule/login.module#LoginModule'
    },{
      path: '',redirectTo: 'home', pathMatch: 'full'
    },{
      path: '**', component: NotFoundComponent
    }]),
    MusicEventModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
