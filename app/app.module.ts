import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { GetHeroComponent } from './components/getHero/get-hero.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainAreaComponent } from './components/mainArea/main-area.component';

import { GetHeroesService } from './services/getHeroes/get-heroes.service';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule ],
  declarations: [ AppComponent,
                  GetHeroComponent,
                  SidebarComponent,
                  MainAreaComponent ],
  bootstrap:    [ AppComponent],
  providers: [GetHeroesService],
})
export class AppModule { }
