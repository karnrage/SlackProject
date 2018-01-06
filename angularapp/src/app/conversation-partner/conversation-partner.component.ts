import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Router } from '@angular/router';
import { Conversation } from '../conversation';


@Component({
  selector: 'app-conversation-partner',
  templateUrl: './conversation-partner.component.html',
  styleUrls: ['./conversation-partner.component.css']
})
export class ConversationPartnerComponent implements OnInit {

  users = []; 
  constructor(private _dataService: DataService, private _router: Router, private _user:User) {
    // trying this additon to the constructor below
    // still not getting to service,-> if not service, then not to backend either
    this._dataService.getAllUsers()
    .then(data => this.users = data)
    console.log(this._dataService.getAllUsers());
    console.log("constructor maybe this is automatic")
   }

  ngOnInit() {
    console.log("ngOnInit maybe this is automatic");
    return this.getAllPartners();
  }

// find other ppl to talk to
// this does not seem to be reached. no print in console.

  getAllPartners(){
    console.log("=======INSIDE getAllUsers FUNCTION==========")
    return this._dataService.getAllUsers()
    .then((data)=>{this.users = data})
    .catch((err)=>console.log("there was an error when pulling all users"))
  }

// below is close all for export class
}
