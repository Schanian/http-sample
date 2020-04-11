import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn : 'root'})
export class MyRestServiceCaller {
    private url: string = '/api/values';
    constructor(private http: HttpClient) {}
    invokeGet(){
        let headers = new HttpHeaders('content-type: application/json');
        return this.http.get( this.url, { headers });
    }

    invokePost (data: any) { 
        let body = JSON.stringify(data);
        let headers = new HttpHeaders('content-type: application/json');
        return this.http.post(this.url, body, { headers })        
    }

    invokePut(id: string, data: any){
        let headers = new HttpHeaders('content-type: application/json');
        let body = JSON.stringify(data);
        return this.http.put(`${this.url}/${id}`, body,  { headers });
    }

    invokeDelete(id:any) {
        let headers = new HttpHeaders('content-type: application/json');
        return this.http.delete(`${this.url}/${id}`,  { headers });
    }
}