import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() message!: string;
  @Output() reply = new EventEmitter<string>()


  saveReply() {
    this.reply.emit("Hi, papa!")
  }
}
