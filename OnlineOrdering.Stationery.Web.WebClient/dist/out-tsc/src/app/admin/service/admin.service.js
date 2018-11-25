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
var AdminService = /** @class */ (function () {
    function AdminService(_http) {
        this._http = _http;
        this.cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.cpHeaders });
    }
    AdminService.prototype.getEmployeeByName = function (employee) {
        return this._http.post('http://localhost:5369/api/ordering/getEmployeeByName', employee, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminService.prototype.getWorkplace = function (search) {
        return this._http.post('http://localhost:5369/api/ordering/getWorkplace', search, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminService.prototype.findProduct = function (find) {
        return this._http.post('http://localhost:5369/api/ordering/findProduct', find, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminService.prototype.getCategories = function (category) {
        return this._http.post('http://localhost:5369/api/ordering/getCategoriesByVendor', category, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map