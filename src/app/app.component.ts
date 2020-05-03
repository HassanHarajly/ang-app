import {Component, OnInit} from '@angular/core';
import { environment } from '@environment'; // nice!

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  ngOnInit() {
    // ...
    if (environment.qa) {
      alert('hello');
    }
  }
}
