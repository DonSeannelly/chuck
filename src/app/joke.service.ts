// joke.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  jokeResult: string; // stores value of random joke
  favs = []; // arr that stores list of favorite jokes
  searchList: any = []; // arr that stores list of search results
  catList: any = [];
  jokeUrl = 'https://api.chucknorris.io/jokes'; // url to get random joke
  searchUrl = 'https://api.chucknorris.io/jokes/search?query='; // url to search for jokes; requires input
  categoryUrl = 'https://api.chucknorris.io/jokes/categories'; // url to retrieve list of categories
  searchTerm: string; // input for search

  constructor(private http: HttpClient) { }

  //** retrieve and display joke. */
  getJoke() {
    interface JokeTime { //** work with data retrieved. */
      value: string;
      category: string;
      id: string;
    }
    this.http.get<JokeTime>(this.jokeUrl + '/random').subscribe(data => {
      console.log('Value: ' + data.value);
      console.log('Category: ' + data.category);
      console.log('ID: ' + data.id);
      this.jokeResult = data.value;
    });
  }
  //** add currently displayed joke to the list of favorite jokes. */
  addFav() {
    this.favs.push(this.jokeResult);
  }
  //** search for jokes. */
  searchJokes(string) {
    this.searchTerm = string;
    this.clearJokes();
    interface JokeSearch { //** interface with search data retrieved. */
      result: any;
      value: string;
    }
    this.http.get<JokeSearch>(this.searchUrl + this.searchTerm ).subscribe(data => {
      console.log('SearchValue: ' + data.result);
      this.searchList = data.result;
    });
  }
  //** clear list of jokes. */
  clearJokes() {
    this.searchList = [];
  }
}
