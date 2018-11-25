import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';
import { Promise } from 'q';
import { Data } from '@angular/router';
import { EmployeeSearch, EmployeeModel, SearchWorkplaceCriteria, WorkplaceModel } from '../model/employee-model';
import { ProductModel, SearchProduct, CategoryResultModel, GetCategory } from '../model/product-model';

@Injectable()
export class AdminService {

    protected BASE_URL: 'http://localhost:5369/api/ordering/';
    protected cpHeaders: Headers;
    protected options: RequestOptions;

    constructor(private _http: Http) {
        this.cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.cpHeaders });
    }

    getEmployeeByName(employee: EmployeeSearch): Observable<EmployeeModel> {
        return this._http.post('http://localhost:5369/api/ordering/getEmployeeByName', employee, this.options)
            .map((response: Response) => <EmployeeModel>response.json())
            .catch(this.handleError);
    }

    getWorkplace(search: SearchWorkplaceCriteria): Observable<WorkplaceModel[]> {
        return this._http.post('http://localhost:5369/api/ordering/getWorkplace', search, this.options)
            .map((response: Response) => <WorkplaceModel[]>response.json())
            .catch(this.handleError);
    }

    findProduct(find: SearchProduct): Observable<ProductModel> {
        return this._http.post('http://localhost:5369/api/ordering/findProduct', find, this.options)
            .map((response: Response) => <ProductModel>response.json())
            .catch(this.handleError);
    }

    getCategories(category: GetCategory): Observable<CategoryResultModel> {
        return this._http.post('http://localhost:5369/api/ordering/getCategoriesByVendor', category, this.options)
            .map((response: Response) => <CategoryResultModel>response.json())
            .catch(this.handleError);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}