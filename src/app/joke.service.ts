import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  jokeResult: string;
  favs = [];
  jokeUrl = 'https://api.chucknorrisjokes.io/jokes';

  constructor(private http: HttpClient) { }

  cars = ['Ford', 'Chevrolet', 'Buick'];

  myData() {
    return 'This is my data.';
  }
  getJoke() {

    interface JokeTime {
      value: string;
      category: string;
    }
    this.http.get<JokeTime>('https://api.chucknorris.io/jokes/random').subscribe(data => {
      console.log('Value: ' + data.value);
      console.log('Category: ' + data.category);
      this.jokeResult = data.value;
    });
  }
  addFav() {
    this.favs.push(this.jokeResult);
    console.log('favorites: ' + this.favs);
  }
}
