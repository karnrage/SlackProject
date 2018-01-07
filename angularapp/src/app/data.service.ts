import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  user: BehaviorSubject<any[]>= new BehaviorSubject ([]);

  constructor(private _http: Http) { }
// ============== register and login here ==========
  register(data){
    console.log("made it");
    return this._http.post('/api/register', data).map((data)=>data.json()).toPromise()
  }

  loginUser(user){
    return this._http.post(`/api/login`, user)
    .map(response => response.json())
    .toPromise()
  }

  logout(){
    return this._http.get('/api/logout').map((data)=>data.json()).toPromise()
  }

//============== create channel here========
  createChannel(channel){
    // return this.

  console.log("is this working")
  }
//================ find all users here========
  getAllUsers(){
    console.log("inside service:getAllUsers")
    return this._http
    .get('/api/getAllUsers')
    .map((response:Response)=>response.json())
    .subscribe( (response:Response)=>response.json() )

  }

  
}
