import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private jokeUrl = 'https://api.chucknorris.io/jokes/random'; // url to jokes
  private joke = '';

  constructor(private http: HttpClient) {}
  getJoke() {
    console.log('got a joke');
    return this.http.get(this.jokeUrl);

  }
}
