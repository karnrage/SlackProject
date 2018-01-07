import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Router } from '@angular/router';
import { Conversation } from '../conversation';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // try finding users here, but then how to move result to next page
  // still not console.log printout>> angular front end, open chrome's console
  users: User[] = []; 
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.user.subscribe(
      response => this.users = response //only use semicolon if a complete block of code
    );
  }

  onButtonClick() { 
    // console.log(`Click event is working, event:`);
    console.log("=======INSIDE getAllUsers FUNCTION in onButtonClick==========")
    this._dataService.getAllUsers()

    
}


// .subscribe(
//   data => ...,
//   error => console.log("there was an error when pulling all users"));
// ...
// )

}
