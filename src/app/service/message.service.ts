import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>('Initial Message');
  currentMessage$ = this.messageSource.asObservable();


  updateMessage(newMsg: string) {
    this.messageSource.next(newMsg)
    console.log("newMsg-----", newMsg)
  }
}
