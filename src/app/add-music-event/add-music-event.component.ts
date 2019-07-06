import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-music-event',
  templateUrl: './add-music-event.component.html',
  styleUrls: ['./add-music-event.component.scss']
})
export class AddMusicEventComponent implements OnInit {

  musicEventForm: FormGroup;
  constructor() {
    this.musicEventForm=new FormGroup({
      Name: new FormControl('Inital value',[Validators.required,Validators.minLength(3)]),
      Price: new FormControl('',[Validators.required]),
      Description: new FormControl('',[Validators.required,Validators.minLength(15)]),
      Date: new FormControl('',[Validators.required]),
      ImageUrl: new FormControl()
    });
  }

  ngOnInit() {
  }

}
