import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../joke.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
  }

}
