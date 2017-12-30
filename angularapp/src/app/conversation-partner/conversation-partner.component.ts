import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
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
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

// find other ppl to talk to

  getAllPartners(){
    console.log("=======INSIDE getAllUsers FUNCTION==========")
    this._dataService.getAllUsers()
    .then((data)=>{this.users = data})
    .catch((err)=>console.log("there was an error when pulling all users"))
  }

// below is close all for export class
}
