import { Component, OnInit, Input, Output } from '@angular/core';

import { DataService } from '../../data.service'
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { Router } from '@angular/router';
// import { Channel } from '../../channel';
import { Conversation } from '../../conversation';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  // conversation = new Conversation();

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }
  
  newConversation 

}
