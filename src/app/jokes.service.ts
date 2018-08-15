import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) {
    console.log('working');
   }
   getJoke() {
     return this.http.get('https://api.chucknorris.io/jokes/random');
   }
}
