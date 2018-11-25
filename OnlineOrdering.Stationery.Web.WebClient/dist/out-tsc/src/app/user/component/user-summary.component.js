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
var core_1 = require("@angular/core");
var UserSummaryComponent = /** @class */ (function () {
    function UserSummaryComponent() {
    }
    UserSummaryComponent.prototype.ngOnInit = function () {
        this._userSummary = this.userSummary;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserSummaryComponent.prototype, "userSummary", void 0);
    UserSummaryComponent = __decorate([
        core_1.Component({
            selector: 'user-summary',
            templateUrl: '../view/user-summary.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], UserSummaryComponent);
    return UserSummaryComponent;
}());
exports.UserSummaryComponent = UserSummaryComponent;
//# sourceMappingURL=user-summary.component.js.map