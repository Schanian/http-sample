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
enameChanged(event: Event){
  console.log('Event ',event);
  // this.ename = event.target.value;
}
  submitted(event: any){
    this.onNameChange.emit(this.ename);
    console.log('submitted event ', event);
  }

}
