import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Hero} from '../../modules/hero/hero.module';
import {Subject, Observable, Observer, BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class GetHeroesService {

    private urlbase: string = 'http://angular2-workshop.azurewebsites.net/api/heroes';

    // opt 1
    private _getHeroesObserver: any;
    getHeroesStream$: Observable<Hero[]>;

    // opt 2
    private authenticatedSource = new Subject<Hero[]>();
    authenticated$ = this.authenticatedSource.asObservable();

    constructor(private _http: Http) {
        this.getHeroesStream$ = new Observable((obs: any) => this._getHeroesObserver = obs).share();

    }

    getHeroes(): Observable<Hero[]> {
       return this._http.get('http://angular2-workshop.azurewebsites.net/api/heroes')
        .map(response => response.json())
        .do(data => data as Hero[]);
    }

  /*   getHeroes(): Observable<Hero[]> {
         return this._http.get('http://angular2-workshop.azurewebsites.net/api/heroes')
            .map(response => response.json().data as Hero[])
            .do(data => this._getHeroesObserver.next(data));
    }*/

    //opt 2
   /* getHeroes() {
        return this._http.get('http://angular2-workshop.azurewebsites.net/api/heroes')
            .map(response => response.json().data as Hero[])
             .do(data => this.authenticatedSource.next(data));
    }*/
}