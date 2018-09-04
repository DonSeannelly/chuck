// home.component.ts

import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {
    readonly ROOT_URL = 'https://api.chucknorris.io/jokes/random';

    constructor (private jokeService: JokeService) {
    }

    get data(): string {
      return this.jokeService.jokeResult;
    }

    grabJoke() {
      this.jokeService.getJoke();
    }
    favButton() {
      this.jokeService.addFav();
    }
    ngOnInit() {
      this.jokeService.getJoke();
      console.log('data value: ' + this.data);
    }
  }
