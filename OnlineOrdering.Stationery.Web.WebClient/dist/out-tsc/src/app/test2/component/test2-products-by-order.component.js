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
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var management_model_1 = require("../../management/model/management-model");
var management_service_1 = require("../../management/service/management.service");
var Test2ProductsByOrderComponent = /** @class */ (function () {
    function Test2ProductsByOrderComponent(_sharedService, _service) {
        this._sharedService = _sharedService;
        this._service = _service;
        this.toUpdate = new management_model_1.SetProductModel();
        this.onProcessedOrder = new core_1.EventEmitter();
        this.productLis = [];
        this.orderListToEnd = [];
    }
    Test2ProductsByOrderComponent.prototype.ngOnInit = function () {
        this.saveStatus = 'warning';
        this.loadOrderStatus();
    };
    Test2ProductsByOrderComponent.prototype.loadOrderStatus = function () {
        var _this = this;
        this._sharedService.getValueObjects()
            .subscribe(function (status) {
            _this.orderStatus = status.statusList.slice(0, 3);
        });
    };
    Test2ProductsByOrderComponent.prototype.SelectedOrderStatus = function (value) {
        this.selectedStatusId = value;
        //console.log("Status ID: ", this.selectedStatusId);
    };
    Test2ProductsByOrderComponent.prototype.updateProduct = function (product) {
        if (this.selectedStatusId !== undefined) {
            product.statusId = this.selectedStatusId;
            this.setProduct(product, this.order.orderId);
            if (product.statusId !== 3) {
                this.order.statusId = product.statusId;
                this.order.products = this.order.products.filter(function (i) { return i !== product; });
                this.productLis.push(product);
            }
            this.selectedStatusId = undefined;
        }
        else {
            console.log("PRDOUCT " + product.productId + " IS NOT PROCESSED!");
        }
        if (this.order.products.length === 0) {
            //console.log("Output Order ID To Remove: ", this.order.orderId);
            //this._service.setOrder(this.order.orderId).subscribe(i => {
            //    this._service.getRequestedOrders();
            //});
            this.orderToEnd = this.order;
            this.orderToEnd.products = this.productLis;
            this.orderListToEnd.push(this.orderToEnd);
            this.onProcessedOrder.emit(this.order.orderId);
            this.onProcessedOrder.emit(this.orderListToEnd);
            this.order = null;
            this.productLis = [];
        }
    };
    Test2ProductsByOrderComponent.prototype.setProduct = function (product, orderId) {
        this.toUpdate.orderId = orderId;
        this.toUpdate.productId = product.productId;
        this.toUpdate.comment = product.comment;
        this.toUpdate.productsCount = product.productsCount;
        this.toUpdate.statusId = product.statusId;
        //this._service.setProduct(this.toUpdate).subscribe(order => {
        //  this._service.getRequestedOrders();
        //});
    };
    Test2ProductsByOrderComponent.prototype.onChange = function (numberID, articuleId, numPlusName) {
        var element = document.getElementById(numberID.toString());
        var elementByName = document.getElementById(articuleId.toString());
        var elementByNumPlusName = document.getElementById(numPlusName);
        if (element.disabled === true || elementByName.disabled === true || elementByNumPlusName.disabled === true) {
            element.disabled = false;
            elementByName.disabled = false;
            elementByNumPlusName.disabled = false;
        }
        else if (element.disabled === false || elementByName.disabled === false || elementByNumPlusName.disabled === false) {
            element.disabled = true;
            elementByName.disabled = true;
            elementByNumPlusName.disabled = true;
        }
        this.saveStatus = 'danger';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", management_model_1.RequestedOrder)
    ], Test2ProductsByOrderComponent.prototype, "order", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Test2ProductsByOrderComponent.prototype, "onProcessedOrder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], Test2ProductsByOrderComponent.prototype, "orderListToEnd", void 0);
    Test2ProductsByOrderComponent = __decorate([
        core_1.Component({
            selector: 'test2-products-by-order',
            templateUrl: '../view/test2-products-by-order.component.html',
            providers: [shared_data_service_1.SharedDataService, management_service_1.ManagementService]
        }),
        __metadata("design:paramtypes", [shared_data_service_1.SharedDataService, management_service_1.ManagementService])
    ], Test2ProductsByOrderComponent);
    return Test2ProductsByOrderComponent;
}());
exports.Test2ProductsByOrderComponent = Test2ProductsByOrderComponent;
//# sourceMappingURL=test2-products-by-order.component.js.map