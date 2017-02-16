import { Component } from '@angular/core';
import { GetHeroesService } from '../../services/getHeroes/get-heroes.service';

@Component({
  selector: 'get-hero', // Name of the HTML tag which needs to be used for displaying this components' template (HTML)
  templateUrl: `app/components/getHero/get-hero.template.html`,
})

export class GetHeroComponent  {

  // Constructor with the service as param (enables usage of the service in this component)
  constructor(private _getHeroesService: GetHeroesService) { }

  // Method which uses the service to call the method which calls the REST service
  // Method does not 'subscribe' to the data returned because the component does not want the data, 
  // only to initiate the call
  getAllHeroes() {
    this._getHeroesService.getHeroes();
  }
}