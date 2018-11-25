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
//import * as swal from 'sweetalert';
var sweetalert_1 = require("sweetalert");
var positioning_1 = require("ngx-bootstrap/positioning");
var order_model_1 = require("../model/order-model");
var order_service_component_1 = require("../service/order-service.component");
var Observable_1 = require("rxjs/Observable");
var OrderBasketComponent = /** @class */ (function () {
    function OrderBasketComponent(modalService, _service) {
        this.modalService = modalService;
        this._service = _service;
        this.onOrderSummary = new core_1.EventEmitter();
        this._productsBasket = [];
        this._product = new order_model_1.Product();
        this.totalAll = 0;
        this.createdOrder = new order_model_1.CreatedOrder();
        this.productsList = [];
    }
    OrderBasketComponent.prototype.ngOnInit = function () {
    };
    OrderBasketComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.productsBasket.forEach(function (p) {
            var data = _this._productsBasket.find(function (x) { return x.productId == p.productId; });
            if (data === null || data === undefined) {
                _this._productsBasket.push(p);
            }
        });
        this.getTotalAll();
        this.onOrderSummary.emit(this._productsBasket);
    };
    OrderBasketComponent.prototype.getTotalAll = function () {
        var _this = this;
        this.totalAll = 0;
        this._productsBasket.forEach(function (product) { return _this.totalAll += product.totalPrice; });
    };
    OrderBasketComponent.prototype.openBasketsProductModal = function (template, product) {
        this.modalRef = this.modalService.show(template);
        this._product = product;
    };
    OrderBasketComponent.prototype.createOrder = function () {
        var _this = this;
        this.productsList = this._productsBasket.map(function (p) {
            return { productId: p.productId, comment: 'empty string', quantity: p.countOfProducts, unitPrice: p.unitPrice };
        });
        this.createdOrder.products = this.productsList;
        this.createdOrder.totalAmount = this.totalAll;
        //console.log("Created Order: ", this.createdOrder);
        //console.log("--: ", this._productsBasket);
        this._service.createOrder(this.createdOrder)
            .subscribe(function (data) {
            _this._productsBasket;
            return true;
        }, function (error) {
            console.error("Error saving order!");
            return Observable_1.Observable.throw(error);
        });
    };
    OrderBasketComponent.prototype.saveProduct = function () {
        var _this = this;
        this._productsBasket.forEach(function (item) {
            if (item.productId == _this._product.productId) {
                item.totalPrice = _this._product.countOfProducts * _this._product.unitPrice;
            }
        });
        this.getTotalAll();
        this.closeModal();
        this.onOrderSummary.emit(this._productsBasket);
    };
    OrderBasketComponent.prototype.removeProduct = function (productId) {
        var _this = this;
        sweetalert_1.default({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this product?",
            icon: "warning",
            dangerMode: true,
        }).then(function (willDelete) {
            if (willDelete) {
                _this._productsBasket.forEach(function (product, index) {
                    if (product.productId === productId) {
                        _this._productsBasket.splice(index, 1);
                        _this.onOrderSummary.emit(_this._productsBasket);
                    }
                });
                sweetalert_1.default("Removed!", "Your product has been remover from basket!", "success");
                _this.getTotalAll();
            }
        });
    };
    OrderBasketComponent.prototype.closeModal = function () {
        this.modalService.hide(1);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OrderBasketComponent.prototype, "onOrderSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderBasketComponent.prototype, "productsBasket", void 0);
    OrderBasketComponent = __decorate([
        core_1.Component({
            selector: 'order-basket-tab',
            templateUrl: '../view/order-basket-tab.component.html',
            providers: [modal_1.BsModalService, positioning_1.PositioningService, order_service_component_1.OrderService]
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService, order_service_component_1.OrderService])
    ], OrderBasketComponent);
    return OrderBasketComponent;
}());
exports.OrderBasketComponent = OrderBasketComponent;
//# sourceMappingURL=order-basket-tab.component.js.map