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
var modal_1 = require("ngx-bootstrap/modal");
var management_service_1 = require("../../management/service/management.service");
var management_model_1 = require("../../management/model/management-model");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var Test2Component = /** @class */ (function () {
    function Test2Component(_service, _sharedService, modalService) {
        this._service = _service;
        this._sharedService = _sharedService;
        this.modalService = modalService;
        this.orderList = [];
    }
    Test2Component.prototype.ngOnInit = function () {
        this.loadRequestedOrders();
    };
    Test2Component.prototype.loadRequestedOrders = function () {
        var _this = this;
        this._service.getRequestedOrders().subscribe(function (orders) {
            _this.orderList = orders.filter(function (item) { return item.statusId === 1; });
            console.log("REQUESTED ORDERS: ", _this.orderList);
        });
    };
    Test2Component.prototype.GetSelectedOrder = function (order) {
        this._order = order;
        console.log("Input Selected Order: ", this._order);
    };
    Test2Component.prototype.GetProcessedOrder = function (order) {
        var _this = this;
        this.orderListToEnd = order;
        console.log("Processed Order: ", this.orderListToEnd);
        this.orderList.forEach(function (i) {
            if (i.orderId === order) {
                _this.orderList = _this.orderList.filter(function (item) { return item !== i; });
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], Test2Component.prototype, "orderList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", management_model_1.RequestedOrder)
    ], Test2Component.prototype, "_order", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], Test2Component.prototype, "orderListToEnd", void 0);
    Test2Component = __decorate([
        core_1.Component({
            selector: 'test2-cmp',
            moduleId: module.id,
            templateUrl: '../view/test2.component.html',
            providers: [modal_1.BsModalService, management_service_1.ManagementService, shared_data_service_1.SharedDataService]
        }),
        __metadata("design:paramtypes", [management_service_1.ManagementService, shared_data_service_1.SharedDataService, modal_1.BsModalService])
    ], Test2Component);
    return Test2Component;
}());
exports.Test2Component = Test2Component;
//# sourceMappingURL=test2.component.js.map