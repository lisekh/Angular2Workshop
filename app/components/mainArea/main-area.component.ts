import { Component } from '@angular/core';
import {Hero} from '../../modules/hero/hero.module';
import {GetHeroesService} from '../../services/getHeroes/get-heroes.service';

@Component({
  selector: 'main-area',
  templateUrl: `app/components/mainArea/main-area.template.html`,
  providers: [GetHeroesService]
})

export class MainAreaComponent  {

  allHeroes: any;

  constructor(private _getHeroesService: GetHeroesService) {
    this._getHeroesService.getHeroes().subscribe(heroes => {
      this.allHeroes = heroes;
    });
  }
}