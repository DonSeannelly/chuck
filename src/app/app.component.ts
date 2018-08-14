import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- home page -->
    <app-home></app-home>

    <!-- favorites page -->
    <app-favorites></app-favorites>

    <!-- routes -->
    <!-- <router-outlet></router-outlet> -->

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chuck Norris Jokes';
}
