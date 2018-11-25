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
var positioning_1 = require("ngx-bootstrap/positioning");
var order_service_component_1 = require("../service/order-service.component");
var order_model_1 = require("../model/order-model");
var common_1 = require("@angular/common");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var shared_model_1 = require("../../shared/model/shared-model");
//import { Order } from "../../management/component/management.component";
var OrderHistory = /** @class */ (function () {
    function OrderHistory(_service, modalService, datepipe, _sharedService) {
        this._service = _service;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this._sharedService = _sharedService;
        this.colorTheme = 'theme-blue';
        this.switcher = false;
        this.orderSC = new order_model_1.OrderSearchCriteria();
        this._ordersHistory = [];
        this.valueObject = new shared_model_1.ValueObjects();
    }
    OrderHistory.prototype.checkStatus = function (status) {
        var alertClass = '';
        if (status === 'Created' || status === 'To be Delivered') {
            alertClass = 'warning';
        }
        else if (status === 'Approved:RM' || status === 'Approved:OC') {
            alertClass = 'success';
        }
        else if (status === 'Rejected:RM' || status === 'Rejected:OC') {
            alertClass = 'danger';
        }
        else if (status === 'Delivered' || status === 'Delivered/Missing') {
            alertClass = 'info';
        }
        return alertClass;
    };
    OrderHistory.prototype.ngOnChanges = function () {
        this.orderSC.pageNumber = this.historyPageNumber;
        this.loadOrderHistory();
    };
    OrderHistory.prototype.ngOnInit = function () {
        this.bsConfig = Object.assign({ dateInputFormat: 'DD/MM/YYYY' }, { containerClass: this.colorTheme });
        this.loadSharedData();
    };
    OrderHistory.prototype.selectedStatus = function (value) {
        this.orderSC.statusId = value;
        this.loadOrderHistory();
    };
    OrderHistory.prototype.selectedUnit = function (value) {
        this.orderSC.unitId = value;
        this.loadOrderHistory();
    };
    OrderHistory.prototype.selectedStartDate = function (value) {
        this.orderSC.startDate = value;
    };
    OrderHistory.prototype.selectedEndDate = function (value) {
        this.orderSC.endDate = value;
        this.loadOrderHistory();
    };
    OrderHistory.prototype.loadOrderHistory = function () {
        var _this = this;
        this.orderSC.pageNumber = this.historyPageNumber;
        this._service.getOrdersHistory(this.orderSC)
            .subscribe(function (orders) {
            _this._ordersHistory = orders;
        });
    };
    OrderHistory.prototype.loadSharedData = function () {
        var _this = this;
        this._sharedService.getValueObjects()
            .subscribe(function (valueObject) {
            _this.valueObject = valueObject;
        });
    };
    OrderHistory.prototype.onOrderStatusChange = function (statusId) {
        console.log("onOrderStatusChange: ", statusId);
    };
    OrderHistory.prototype.confirmDelivery = function (order) {
        console.log(order);
        console.log("DETAILS: ", this.orderDetails);
    };
    OrderHistory.prototype.onChange = function (numberID) {
        var element = document.getElementById(numberID.toString());
        if (element.disabled === true) {
            element.disabled = false;
        }
        else if (element.disabled === false) {
            element.disabled = true;
        }
    };
    OrderHistory.prototype.openOrderHistoryModal = function (orderHistoryModal, orderId) {
        this.orderDetails = this._ordersHistory.filter(function (order) { return order.orderId == orderId; });
        this.modalRef = this.modalService.show(orderHistoryModal);
    };
    OrderHistory.prototype.closeOrderHistoryModal = function () {
        this.modalService.hide(1);
        this.switcher = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], OrderHistory.prototype, "historyPageNumber", void 0);
    OrderHistory = __decorate([
        core_1.Component({
            selector: 'order-history-tab',
            templateUrl: '../view/order-history-tab.component.html',
            providers: [modal_1.BsModalService, positioning_1.PositioningService, common_1.DatePipe, order_service_component_1.OrderService, shared_data_service_1.SharedDataService]
        }),
        __metadata("design:paramtypes", [order_service_component_1.OrderService, modal_1.BsModalService, common_1.DatePipe, shared_data_service_1.SharedDataService])
    ], OrderHistory);
    return OrderHistory;
}());
exports.OrderHistory = OrderHistory;
//# sourceMappingURL=order-history-tab.component.js.map