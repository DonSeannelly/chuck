import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { JokeService } from '../../joke.service';

@Component ({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

get favData(): any {
  return this.jokeService.favs;
}

  ngOnInit() {
  }

}
