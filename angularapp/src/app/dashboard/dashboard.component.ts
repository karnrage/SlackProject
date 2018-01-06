import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Router } from '@angular/router';
import { Conversation } from '../conversation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // try finding users here, but then how to move result to next page
  // still not console.log printout
  users = []; 
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  onButtonClick() { 
    console.log(`Click event is working, event:`);
    console.log("=======INSIDE getAllUsers FUNCTION==========")
    this._dataService.getAllUsers()
    .then((data)=>{this.users = data})
    .catch((err)=>console.log("there was an error when pulling all users"))
}

}
