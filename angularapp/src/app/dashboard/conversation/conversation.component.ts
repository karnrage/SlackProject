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
  // neither works below
  // conversation = new Conversation(conversationName, context, author, createdat){};
  // conversation = new Conversation(){};
        
  // public conversationName: string = "",
  // public context: string = "",
  // public author: string = "",
  // public createdAt: {type: Date}

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }
  
  newConversation 

}
