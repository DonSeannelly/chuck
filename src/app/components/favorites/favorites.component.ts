// favorites.components.ts

import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../joke.service';

@Component ({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  // get favorites array from service
get favData(): any {
  return this.jokeService.favs;
}

  // removes favorite from list
removeFav(item) {
  const index = this.jokeService.favs.indexOf(item);
  this.jokeService.favs.splice(index, 1);
}

  ngOnInit() {

  }

}
