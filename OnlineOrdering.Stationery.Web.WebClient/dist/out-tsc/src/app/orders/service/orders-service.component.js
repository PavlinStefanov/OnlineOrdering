"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
require("rxjs/add/operator/toPromise");
var OrderService = /** @class */ (function () {
    function OrderService(_http) {
        this._http = _http;
    }
    //getProducts(): Observable<OrderProduct[]> {
    //    return this._http.get('http://localhost:5369/api/orders/getProducts')
    //        .map((response: Response) => <OrderProduct[]>response.json())
    //        .catch(this.handleError);
    //}
    OrderService.prototype.extractArray = function (res) {
        var data = res.json();
        return data || [];
    };
    OrderService.prototype.handlePromiseError = function (error) {
        console.error(error);
        throw (error);
    };
    OrderService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return OrderService;
}());
exports.OrderService = OrderService;
var OrderProduct = /** @class */ (function () {
    function OrderProduct() {
    }
    return OrderProduct;
}());
exports.OrderProduct = OrderProduct;
//# sourceMappingURL=orders-service.component.js.map