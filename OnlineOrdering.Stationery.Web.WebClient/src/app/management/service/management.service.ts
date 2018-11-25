import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';
import { RequestedOrder, SetProductModel, SetOrderModel, OrderCompleteModel } from '../model/management-model';

@Injectable()
export class ManagementService {

    private _ordersUrl: string = 'http://localhost:5369/api/ordering/';
    constructor(private _http: Http) { }

    getRequestedOrders(): Observable<RequestedOrder[]> {
        return this._http.get(this._ordersUrl + 'getRequestedOrders')
            .map((response: Response) => <RequestedOrder[]>response.json())
            .catch(this.handleError);
    }

    setProduct(toUpdatedPR: SetProductModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(toUpdatedPR);
        return this._http.patch(this._ordersUrl + 'setProduct', body, options)
            .map(res => console.info(res))
            .catch(this.handleError);
    }

    completeOrder(order: OrderCompleteModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(order);
        return this._http.patch(this._ordersUrl + 'completeOrder', body, options)
            .map(res => console.info(res))
            .catch(this.handleError);
    }

    setOrder(toUpdateORD: SetOrderModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(toUpdateORD);
        return this._http.patch(this._ordersUrl + 'setProduct', body, options)
            .map(res => console.info(res))
            .catch(this.handleError);
    }

    addToLinkedOrder() { }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}