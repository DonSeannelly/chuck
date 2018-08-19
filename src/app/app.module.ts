import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './alert.service';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './search.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavoritesComponent,
    AlertComponent,
    SearchComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [JokeService, AlertService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
