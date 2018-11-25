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
var user_profile_service_1 = require("app/user/service/user-profile.service");
var UserComponent = /** @class */ (function () {
    function UserComponent(_userProfileService) {
        this._userProfileService = _userProfileService;
        this.statusMessage = 'Loading data. Please wait...';
        this.unitList = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userProfileService.getUserProfile()
            .subscribe(function (profileData) { return _this.userProfile = profileData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
            console.error(error);
        });
        this.printToLog();
    };
    UserComponent.prototype.getUnitList = function () {
        //return this.userProfile["unitList"];
        //return this.userProfile.unitList;
        this.unitList = this.userProfile.unitList;
        return this.unitList;
    };
    UserComponent.prototype.updateUserProfile = function () {
        var _this = this;
        this._userProfileService.updateUserProfile(this.userProfile)
            .subscribe(function (profile) {
            _this._userProfileService.getUserProfile();
        });
        this.showNotification('top', 'center');
    };
    UserComponent.prototype.Selected = function (value) {
        console.log(value);
        return value;
    };
    UserComponent.prototype.printToLog = function () {
        console.log(this.getUnitList());
    };
    UserComponent.prototype.showNotification = function (from, align) {
        var type = ['info'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "User <b>" + this.userProfile.firstName.concat(" ", this.userProfile.lastName) + "</b> has been updated successfully."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html',
            providers: [user_profile_service_1.UserProfileService]
        }),
        __metadata("design:paramtypes", [user_profile_service_1.UserProfileService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map