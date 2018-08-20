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

 /* constructor(private http: HttpClient) {
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

  addFavorite() {
    this.favs.push(this.jokeResult);
    console.log(this.favs);
  } */


  ngOnInit() {
    this.jokeService.getJoke();
    console.log('data value: ' + this.data);
  }

}
