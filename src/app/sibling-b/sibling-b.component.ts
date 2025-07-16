import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-sibling-b',
  imports: [],
  templateUrl: './sibling-b.component.html',
  styleUrl: './sibling-b.component.css'
})
export class SiblingBComponent implements OnInit{

  receivedMessage = '';
  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
    this.receiveMessage()
  }

  receiveMessage() {
    this.messageService.currentMessage$.subscribe(data => {
      console.log("data---", data)
      this.receivedMessage = data;
    })
  }
}
