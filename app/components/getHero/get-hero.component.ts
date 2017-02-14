import { Component } from '@angular/core';
import {GetHeroesService} from '../../services/getHeroes/get-heroes.service';

@Component({
  selector: 'get-hero',
  templateUrl: `app/components/getHero/get-hero.template.html`,
  providers: [GetHeroesService]
})

export class GetHeroComponent  {

  constructor(private _getHeroesService: GetHeroesService) { }

  getHeroes() {
    this._getHeroesService.getHeroes();
  }
}