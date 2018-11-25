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
var user_1 = require("../model/user");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var shared_model_1 = require("../../shared/model/shared-model");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.onProfileUpdated = new core_1.EventEmitter();
        this.userProfile = new user_1.User();
        this.updateUser = new user_1.UpdateUser();
        this.valueObject = new shared_model_1.ValueObjects();
    }
    EditProfileComponent.prototype.ngOnChanges = function () {
    };
    EditProfileComponent.prototype.loadSharedData = function () {
        var _this = this;
        this._sharedService.getValueObjects()
            .subscribe(function (valueObject) { _this.valueObject = valueObject; });
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        this.loadSharedData();
    };
    EditProfileComponent.prototype.SelectedJobTitle = function (value) {
        this.updateUser.jobId = value;
    };
    EditProfileComponent.prototype.SelectedUnitName = function (value) {
        this.updateUser.unitId = value;
    };
    EditProfileComponent.prototype.updateUserProfile = function () {
        this.showNotification('top', 'center', 2);
        this.updateUser.firstName = this.userProfile.firstName;
        this.updateUser.lastName = this.userProfile.lastName;
        this.updateUser.userName = this.userProfile.userName;
        this.onProfileUpdated.emit(this.updateUser);
    };
    EditProfileComponent.prototype.showNotification = function (from, align, messageId) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-user",
            message: "User <b>" + this.userProfile.firstName.concat(" ", this.userProfile.lastName) + "</b> has been updated successfully."
        }, {
            type: type[messageId],
            timer: 500,
            placement: {
                from: from,
                align: align
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EditProfileComponent.prototype, "onProfileUpdated", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], EditProfileComponent.prototype, "userProfile", void 0);
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: 'edit-profile',
            templateUrl: '../view/edit-profile.component.html',
            providers: [shared_data_service_1.SharedDataService]
        }),
        __metadata("design:paramtypes", [shared_data_service_1.SharedDataService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=edit-profile.component.js.map