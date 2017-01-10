import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
