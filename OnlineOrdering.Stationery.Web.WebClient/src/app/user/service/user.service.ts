import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';
import { User, UpdateUser } from '../model/user';
import { PromiseBaseService } from '../../shared/service/promise-data.service';
import { DataService } from './data.service';
import { Configuration } from '../../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    protected BASE_URL: 'http://localhost:5369/api/ordering/';

    constructor(private _http: Http) { }

    getUser(): Observable<User> {
        return this._http.get('http://localhost:5369/api/ordering/getUser')
            .map((response: Response) => <User>response.json())
            .catch(this.handleError);
    }

    updateUser(user: UpdateUser) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(user);
        return this._http.post('http://localhost:5369/api/ordering/updateUser', body, options)
            .map(res => console.info(res))
            .catch(this.handleError);
    }

    handlePromiseError(error: Response) {
        console.error(error);
        throw (error);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
} 