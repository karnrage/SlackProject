import { Component, OnInit, Output } from '@angular/core';
// removed Input from above, not needed, message only outputs


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Output() message;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){    
    console.log(this.message);
  }

}
