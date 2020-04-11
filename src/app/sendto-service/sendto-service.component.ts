import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MyRestServiceCaller} from '../services/httpRestApi';


@Component({
  selector: 'app-sendto-service',
  templateUrl: './sendto-service.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class SendtoServiceComponent implements OnInit {

  constructor(private http: HttpClient, private iMyRestServiceCaller: MyRestServiceCaller) { }
  @Input() Name : string;
  ngOnInit(): void {
  }

  goGet(){
    let sub = this.iMyRestServiceCaller.invokeGet().subscribe(response => console.log(`Get ${response}`));
  }

  goPost(data: string){
    let sub = this.iMyRestServiceCaller.invokePost(this.Name);
    sub.subscribe(response => console.log(`Post ${response}`));
  }

  goPut(data: string){
    let sub = this.iMyRestServiceCaller.invokePut('1',this.Name);
    sub.subscribe(response => console.log(`Put ${response}`));
  }

  goDelete(data: string){
    let sub = this.iMyRestServiceCaller.invokeDelete(1);
    sub.subscribe(response => console.log(`Delete ${response}`));
  }
}
