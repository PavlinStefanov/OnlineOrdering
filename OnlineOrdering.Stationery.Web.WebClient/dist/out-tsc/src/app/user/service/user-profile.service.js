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
var UserProfileService = /** @class */ (function () {
    function UserProfileService(_http) {
        this._http = _http;
    }
    UserProfileService.prototype.getUserProfile = function () {
        return this._http.get('http://localhost:5369/api/user/getUser')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserProfileService.prototype.updateUserProfile = function (profile) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(profile);
        //return this._http.('http://localhost:5369/api/user/updateProfile', body, options).map((res: Response) => res.json());
        return this._http.patch("/api/user/updateProfile", profile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserProfileService.prototype.handlePromiseError = function (error) {
        console.error(error);
        throw (error);
    };
    UserProfileService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    UserProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=user-profile.service.js.map