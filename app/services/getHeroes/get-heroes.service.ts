import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx'; // Third-pary library for using Observables
import { RequestOptions } from '@angular/http/src/base_request_options';

// Decorator which labels this file as a 'service'
@Injectable()
export class GetHeroesService {

    // A private observer which is the only one that pushes data in the 'pipe' (Observable)
    private _getHeroesObserver: any;
    // A public stream which any component can listen to (sibscribe) and receive data
    getHeroesStream$: Observable<any>;

    // Http as a param in the constructor makes this function available to use in the class
    constructor(private _http: Http) {
        // Instansiate the Observable and store the Observer object in the _getHeroesObserver.
        this.getHeroesStream$ = new Observable((obs: any) => {
            this._getHeroesObserver = obs;
        }).share(); // Must be double checked: share() enables several components to listen (subscribe) to the data stream ?
    }

    // A call to this method will enable the REST call to our azure service, which returns 12 items with three properties
    getHeroes() {
         return this._http.get('https://api.heroes.bigstickcarpet.com/characters')
            .map(response => response.json()) // For every respons received from the call, map the result to json format
            .subscribe(data => this._getHeroesObserver.next(data)); // For every json data we map, make the Observer push the json data in the data pipe
    }

    // Example of same service call but with Http Headers
  /*  getHeroes() {
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json');
        let myParams;
        let options = new RequestOptions({headers: myHeader, params: myParams});

        return this._http.get('https://docs.opendota.com/#tag/heroes', myHeader)
        //.map(response => response.json())
        .subscribe(data => this._getHeroesObserver.next(data));
    }*/
}

/*
        return this._http.get('https://docs.opendota.com/#tag/heroes', {
        method: 'GET',
            headers: new Headers([
                'Allow', 'GET',
                'Accept', 'application/json',
                'Content-Type', 'application/json'
            ])
        })
        .map(response => response.json())
        .subscribe(data => this._getHeroesObserver.next(data));
*/  
    