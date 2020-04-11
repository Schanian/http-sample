import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
   
  ename: string = ''; 

  ngOnInit(): void {
  }
  onNameChanged (event: any){
    console.log('Event ',);
    this.onNameChange.emit(event.target.value);
  }

}
