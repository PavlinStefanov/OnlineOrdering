"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromiseBaseService = /** @class */ (function () {
    //protected abstract readonly GETALL_URL: string;
    //protected abstract readonly CREATE_URL: string;
    //protected abstract readonly UPDATE_URL: string;
    //protected abstract readonly GETBYID_URL: string;
    //protected abstract readonly TOGGLESTATE_URL: string;
    function PromiseBaseService(http) {
        this.http = http;
    }
    PromiseBaseService.prototype.get = function (url, options) {
        return this.handlePromise(this.http.get("/" + url, options));
    };
    PromiseBaseService.prototype.handlePromise = function (observable) {
        //this.slimLoadingBar.start();
        return observable
            .toPromise()
            .then(function (response) {
            //this.slimLoadingBar.complete();
            return response.json();
        })
            .catch(function (error) {
            //this.slimLoadingBar.complete();
            throw error;
        });
    };
    return PromiseBaseService;
}());
exports.PromiseBaseService = PromiseBaseService;
//# sourceMappingURL=promise-data.service.js.map