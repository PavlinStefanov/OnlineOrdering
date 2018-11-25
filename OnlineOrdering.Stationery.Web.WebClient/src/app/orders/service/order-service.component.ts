import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';
import { Product, SearchCriteria, OrderSearchCriteria, Criteria, CreatedOrder, OrdersHistory } from '../model/order-model';
import { Promise } from 'q';
import { Data } from '@angular/router';
import { concat } from 'rxjs/operator/concat';


@Injectable()
export class OrderService {

    private _ordersUrl: string = 'http://localhost:5369/api/ordering/';
    constructor(private _http: Http) { }

    getOrdersHistory(orderSC: OrderSearchCriteria): Observable<OrdersHistory[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        
        return this._http.post(this._ordersUrl + 'ordersHistory', orderSC, options)
            .map((response: Response) => <OrdersHistory[]>response.json())
            .catch(this.handleError);
    }
    getCriteria(): Observable<Criteria> {
        return this._http.get(this._ordersUrl + 'getCriteria')
            .map((response: Response) => <Criteria>response.json())
            .catch(this.handleError);
    }

    getProducts(searchCriteria: SearchCriteria): Observable<Product[]> {
        return this._http.post(this._ordersUrl + 'getProducts', searchCriteria)
            .map((response: Response) => <Product[]>response.json())
            .catch(this.handleError);
    }

    createOrder(orderOfProducts: CreatedOrder): Observable<CreatedOrder> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this._http.post(this._ordersUrl +'createOrder', orderOfProducts, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}


