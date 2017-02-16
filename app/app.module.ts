// Imports of angular2 features
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports of your components
import { AppComponent }  from './app.component';
import { GetHeroComponent } from './components/getHero/get-hero.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainAreaComponent } from './components/mainArea/main-area.component';

// Imports of the services you want to be available for all components in the component hierarchy
import { GetHeroesService } from './services/getHeroes/get-heroes.service';

// ROOT component - can be identified with the decorator 'NgModule'.
// Every app must have at least ONE root component - which all other compoenent are connected to in a component
// hierarchy.
// In much larger application it is possible to any many root components - each hierarchy would in a way be its own app.
// Each app could inhabit a spesific feature (large features).
@NgModule({
  // 'imports' are used to declare the functionalies you are using from the angular2 framework
  imports:      [ BrowserModule,
                  HttpModule ],
  // 'declarations' are used to attach your components to the component hierarchy
  declarations: [ AppComponent,
                  GetHeroComponent,
                  SidebarComponent,
                  MainAreaComponent ],
  // 'bootstrap' - bootstrap (load/initializes) the application
  bootstrap:    [ AppComponent],
  // Declaring the service in the root component makes it available for all components. (They just need to import it o use it).
  // NB!! - Every time you declare a service as a 'provider' in a component (providers: [...]), it creates a NEW instance of that service.
  // Having several instances must be used with care, for when listening to data (Observable streams) you might experience that you are not getting any data
  // even though you are listening to a service that has been called. Basically, you are not receiving any data because you are listening to a data stream
  // of an other instance of the same service class.
  providers: [GetHeroesService],
})
export class AppModule { }
