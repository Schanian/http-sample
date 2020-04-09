import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENETDOWN } from 'constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameChanged (event){
    //this.title = event.
    console.log('AppComponent ',event);
  }
  title = 'http-sample';
//  constructor(private http: HttpClient){ }
  
}
