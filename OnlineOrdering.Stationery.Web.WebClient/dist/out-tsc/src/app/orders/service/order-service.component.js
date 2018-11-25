"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
require("rxjs/add/operator/toPromise");
var OrderService = /** @class */ (function () {
    function OrderService(_http) {
        this._http = _http;
        this._ordersUrl = 'http://localhost:5369/api/ordering/';
    }
    OrderService.prototype.getOrdersHistory = function (orderSC) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this._http.post(this._ordersUrl + 'ordersHistory', orderSC, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.getCriteria = function () {
        return this._http.get(this._ordersUrl + 'getCriteria')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.getProducts = function (searchCriteria) {
        return this._http.post(this._ordersUrl + 'getProducts', searchCriteria)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.createOrder = function (orderOfProducts) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this._http.post(this._ordersUrl + 'createOrder', orderOfProducts, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    OrderService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order-service.component.js.map