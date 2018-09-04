// search.component.ts

import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../joke.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchValue: string;

  constructor(private jokeService: JokeService) { }

  // get search results array from jokeservice
  get searchData(): any {
    return this.jokeService.searchList;
  }

  searchButton (string) {
    string = this.searchValue;
    this.jokeService.searchJokes(this.searchValue);
  }

  favButton() {
    this.jokeService.addFav();
  }
}
