import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { Router } from '@angular/router';
import { Channel } from '../../channel';

@Component({
  selector: 'app-createchannel',
  templateUrl: './createchannel.component.html',
  styleUrls: ['./createchannel.component.css']
})
export class CreatechannelComponent implements OnInit {
  channel: Channel = new Channel();

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  createChannel(){
    console.log("=========INSIDE CREATECHANNEL FUNCTION========")
    this._dataService.createChannel(this.channel)
  }


}
