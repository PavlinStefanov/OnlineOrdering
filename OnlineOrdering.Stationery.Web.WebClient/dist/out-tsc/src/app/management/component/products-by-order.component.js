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
var management_model_1 = require("../model/management-model");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var management_service_1 = require("../service/management.service");
var paginator_1 = require("../../shared/common/paginator");
var ProductsByOrderComponent = /** @class */ (function () {
    function ProductsByOrderComponent(_sharedService, _service) {
        this._sharedService = _sharedService;
        this._service = _service;
        this.toUpdatePR = new management_model_1.SetProductModel();
        this.toUpdateORD = new management_model_1.SetOrderModel();
        this.onProcessedOrder = new core_1.EventEmitter();
        this.productList = [];
        this.statusStorage = [];
    }
    ProductsByOrderComponent.prototype.ngOnChanges = function () {
        this.paginator = new paginator_1.Paginator(this.order.products);
        this.order.isLinked;
        //console.log('Paginator: ', this.paginator.getOrderListSequence());
        //console.log('Products: ', this.order.products);
        //this.paginator.getOrderListSequence().length
        //this.getOrderListSequence();
    };
    ProductsByOrderComponent.prototype.ngOnInit = function () {
        this.saveStatus = 'warning';
        this.loadOrderStatus();
    };
    ProductsByOrderComponent.prototype.loadOrderStatus = function () {
        var _this = this;
        this._sharedService.getValueObjects()
            .subscribe(function (status) {
            _this.orderStatus = status.statusList.slice(0, 3);
            console.log("Order Statuses: ", _this.orderStatus);
        });
    };
    ProductsByOrderComponent.prototype.SelectedOrderStatus = function (value) {
        this.selectedStatusId = value;
    };
    ProductsByOrderComponent.prototype.updateProduct = function (product) {
        var _this = this;
        if (this.selectedStatusId !== undefined) {
            product.statusId = this.selectedStatusId;
            this.setProduct(product, this.order.orderId);
            this.statusStorage.push(this.selectedStatusId);
            this.order.products = this.order.products.filter(function (i) { return i !== product; });
            this.paginator.setObjectList = this.order.products;
            if (product.statusId !== 1) {
                this.productList.push(product);
            }
            this.selectedStatusId = undefined;
        }
        else {
            console.log("PRDOUCT " + product.productId + " IS NOT PROCESSED!");
        }
        if (this.order.products.length === 0) {
            this.toUpdateORD.orderId = this.order.orderId;
            this.toUpdateORD.statusId = 3; // тука трябва да се направи проверка, дали е RM or OC, защото във момента работи за RM
            this.orderToEnd = this.order;
            this.orderToEnd.statusId = 3;
            this.statusStorage.forEach(function (item) {
                if (item.toString() === '2') {
                    _this.toUpdateORD.statusId = 2;
                    _this.orderToEnd.statusId = 2;
                }
            });
            this._service.setOrder(this.toUpdateORD).subscribe(function (i) {
                _this._service.getRequestedOrders();
            });
            if (this.productList.length > 0) {
                this.orderToEnd.products = this.productList;
            }
            this.onProcessedOrder.emit(this.orderToEnd);
            this.order = null;
            this.productList = [];
        }
    };
    ProductsByOrderComponent.prototype.setProduct = function (product, orderId) {
        var _this = this;
        this.toUpdatePR.orderId = orderId;
        this.toUpdatePR.productId = product.productId;
        this.toUpdatePR.comment = product.comment;
        this.toUpdatePR.productsCount = product.productsCount;
        this.toUpdatePR.statusId = this.selectedStatusId;
        this._service.setProduct(this.toUpdatePR).subscribe(function (order) {
            _this._service.getRequestedOrders();
        });
    };
    ProductsByOrderComponent.prototype.onChange = function (numberID, articuleId, numPlusName) {
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
    ], ProductsByOrderComponent.prototype, "order", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ProductsByOrderComponent.prototype, "onProcessedOrder", void 0);
    ProductsByOrderComponent = __decorate([
        core_1.Component({
            selector: 'products-by-order',
            templateUrl: '../view/products-by-order.component.html',
            providers: [shared_data_service_1.SharedDataService, management_service_1.ManagementService]
        }),
        __metadata("design:paramtypes", [shared_data_service_1.SharedDataService, management_service_1.ManagementService])
    ], ProductsByOrderComponent);
    return ProductsByOrderComponent;
}());
exports.ProductsByOrderComponent = ProductsByOrderComponent;
//# sourceMappingURL=products-by-order.component.js.map