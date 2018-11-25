//import { ResponseResult } from './../models/ResponseResult{T}';
import { Http, RequestOptionsArgs, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { ResponseResult } from '../model/ResponseResult{T}';

export abstract class PromiseBaseService {

    protected abstract readonly BASE_URL: string;

    //protected abstract readonly GETALL_URL: string;
    //protected abstract readonly CREATE_URL: string;
    //protected abstract readonly UPDATE_URL: string;
    //protected abstract readonly GETBYID_URL: string;
    //protected abstract readonly TOGGLESTATE_URL: string;

    constructor(protected http: Http) { }

    protected get<T>(url: string, options?: RequestOptionsArgs): Promise<ResponseResult<T>> {
        return this.handlePromise<T>(this.http.get("/" + url, options));
    }

    private handlePromise<T>(observable: Observable<Response>): Promise<ResponseResult<T>> {
        //this.slimLoadingBar.start();
        return observable
            .toPromise()
            .then<ResponseResult<T>>(response => {
                //this.slimLoadingBar.complete();
                return response.json();
            })
            .catch(error => {
                //this.slimLoadingBar.complete();
                throw error;
            });
    }
}
