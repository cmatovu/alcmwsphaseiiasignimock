import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
 // template: `<h1> Hello cm ALC Phase II Assignment</h1>
 // <h2> MOVIE LIST</h2>'
 // <img src="/assets/jmages/imllogo2.png"/>
 // <app-nav-bar></app-nav-bar>
 // <app-movies></app-movies>
 // `,
  template: `<h1> Hello cm ALC Phase II Assignment</h1>
  <h2> MOVIE LIST</h2>'
  <img src="/assets/jmages/imllogo2.png"/>
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fundamentals';
}
