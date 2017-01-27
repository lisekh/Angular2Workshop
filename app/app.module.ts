import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NewHeroComponent } from './components/newHero/new-hero.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainAreaComponent } from './components/mainArea/main-area.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  NewHeroComponent,
                  SidebarComponent, 
                  MainAreaComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
