import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  register(data){
    console.log("made it");
    return this._http.post('/api/register', data).map((data)=>data.json()).toPromise()
  }
  logout(){
    return this._http.get('/api/logout').map((data)=>data.json()).toPromise()
  }
}