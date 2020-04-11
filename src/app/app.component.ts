import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENETDOWN } from 'constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string ;
  nameChanged (data: string){
    //this.title = event.
    console.log('AppComponent ',data);
    this.title = data;
  }
//  constructor(private http: HttpClient){ }
  
}
