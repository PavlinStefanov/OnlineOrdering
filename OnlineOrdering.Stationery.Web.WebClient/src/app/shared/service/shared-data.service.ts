import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';
import { Promise } from 'q';
import { Data } from '@angular/router';
import { ValueObjects } from '../model/shared-model';


@Injectable()
export class SharedDataService {

    private _sharedUrl: string = 'http://localhost:5369/api/ordering/';
    constructor(private _http: Http) { }

    getValueObjects(): Observable<ValueObjects> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this._http.get(this._sharedUrl + 'getValueObjects', options)
            .map((response: Response) => <ValueObjects>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}