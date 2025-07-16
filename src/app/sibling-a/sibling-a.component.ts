import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-sibling-a',
  imports: [FormsModule],
  templateUrl: './sibling-a.component.html',
  styleUrl: './sibling-a.component.css'
})
export class SiblingAComponent {
  constructor(private messageService: MessageService) {

  }
  msg = '';
  send() {
    this.messageService.updateMessage(this.msg);

  }

}
