import { Component } from '@angular/core';
import { GetHeroesService } from '../../services/getHeroes/get-heroes.service';

@Component({
  selector: 'main-area',
  templateUrl: `app/components/mainArea/main-area.template.html`,
})

export class MainAreaComponent {

  // A variable which stores the data sent from the GetHeroesService pipe (Observable).
  allHeroes: any;

  // Constructor which enables the use of the GetHeroesService.
  // When this component is initialized we immediately start 'listening' to the
  // 'pipe' (Observable) for data. When data is received it is stored in the 'allHeroes' variable.
  constructor(private _getHeroesService: GetHeroesService) {
      this._getHeroesService.getHeroesStream$.subscribe(heroes => this.allHeroes = heroes);
  }
}