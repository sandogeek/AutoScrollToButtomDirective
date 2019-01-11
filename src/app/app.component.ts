import { Component, ViewChild, ElementRef } from '@angular/core';
import { ResizedEvent } from './ResizeEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-autoscroll-to-bottom';
  comments: any[] = [];
  @ViewChild('commentEl') comment: ElementRef ;

  push = () => {
    this.comments.push('hello');
  }

  log = (event: ResizedEvent) => {
    console.log(`${JSON.stringify(event)}`);
  }

}
