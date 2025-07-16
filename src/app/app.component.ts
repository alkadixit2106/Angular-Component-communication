import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";
import { SiblingAComponent } from './sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-b/sibling-b.component';

@Component({
  selector: 'app-root',
  imports: [ ParentComponent, SiblingAComponent, SiblingBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-communication-demo';
}
