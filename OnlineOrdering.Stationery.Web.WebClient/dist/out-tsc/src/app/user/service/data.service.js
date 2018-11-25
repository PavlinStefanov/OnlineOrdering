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
require("rxjs/add/operator/map");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_constants_1 = require("../../app.constants");
var DataService = /** @class */ (function () {
    function DataService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.actionUrl = _configuration.ServerWithApiUrl + 'ordering/';
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.actionUrl);
    };
    DataService.prototype.getSingle = function (url) {
        return this.http.get(this.actionUrl + url);
    };
    DataService.prototype.add = function (itemName) {
        var toAdd = JSON.stringify({ ItemName: itemName });
        return this.http.post(this.actionUrl, toAdd);
    };
    DataService.prototype.update = function (id, itemToUpdate) {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + id);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, app_constants_1.Configuration])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
var CustomInterceptor = /** @class */ (function () {
    function CustomInterceptor() {
    }
    CustomInterceptor.prototype.intercept = function (req, next) {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    };
    CustomInterceptor = __decorate([
        core_1.Injectable()
    ], CustomInterceptor);
    return CustomInterceptor;
}());
exports.CustomInterceptor = CustomInterceptor;
//# sourceMappingURL=data.service.js.map