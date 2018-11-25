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
var management_service_1 = require("../service/management.service");
var management_model_1 = require("../model/management-model");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(_service, _sharedService, modalService) {
        this._service = _service;
        this._sharedService = _sharedService;
        this.modalService = modalService;
        this.orderList = [];
        this.orderListToEnd = [];
    }
    ManagementComponent.prototype.ngOnChanges = function () {
        this.loadRequestedOrders();
    };
    ManagementComponent.prototype.ngOnInit = function () {
        this.loadRequestedOrders();
    };
    ManagementComponent.prototype.loadRequestedOrders = function () {
        var _this = this;
        this._service.getRequestedOrders()
            .subscribe(function (orders) {
            _this.orderList = orders.filter(function (item) { return item.statusId === 1; });
            _this.orderListToEnd = orders.filter(function (item) { return item.statusId === 2 && item.isCompleted === false; });
        });
    };
    ManagementComponent.prototype.GetSelectedOrder = function (order) {
        this._order = order;
    };
    ManagementComponent.prototype.GetCompletedOrder = function (ord) {
        var _this = this;
        this._service.completeOrder(ord).subscribe(function (orders) {
            _this._service.getRequestedOrders().subscribe(function (orders) {
                _this.orderList = orders.filter(function (item) { return item.statusId === 1; });
                _this.orderListToEnd = orders.filter(function (item) { return item.statusId === 2 && item.isCompleted === false; });
            });
        });
    };
    ManagementComponent.prototype.GetProcessedOrder = function (order) {
        var _this = this;
        /*  слагам тази проверка, тъй като ако одера е отказан,
         *  то не трябва да се показава във <order-ending> компонента
         */
        if (order.statusId !== 3) {
            this.orderListToEnd.push(order);
        }
        this.orderListToEnd = this.orderListToEnd.slice(); // това го сложих след търсене в стек овърфлоу, ngOnChanges() не работи за arrays add/delete change state
        this.orderList.forEach(function (current) {
            if (current.orderId === order.orderId) {
                _this.orderList = _this.orderList.filter(function (item) { return item !== current; });
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], ManagementComponent.prototype, "orderList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", management_model_1.RequestedOrder)
    ], ManagementComponent.prototype, "_order", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], ManagementComponent.prototype, "orderListToEnd", void 0);
    ManagementComponent = __decorate([
        core_1.Component({
            selector: 'management-cmp',
            moduleId: module.id,
            templateUrl: '../view/management.component.html',
            providers: [modal_1.BsModalService, management_service_1.ManagementService, shared_data_service_1.SharedDataService]
        }),
        __metadata("design:paramtypes", [management_service_1.ManagementService,
            shared_data_service_1.SharedDataService,
            modal_1.BsModalService])
    ], ManagementComponent);
    return ManagementComponent;
}());
exports.ManagementComponent = ManagementComponent;
//# sourceMappingURL=management.component.js.map