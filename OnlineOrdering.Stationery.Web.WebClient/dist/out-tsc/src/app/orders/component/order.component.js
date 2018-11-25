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
var order_service_component_1 = require("../service/order-service.component");
var order_model_1 = require("../model/order-model");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(_service) {
        this._service = _service;
        this.statusMessage = 'Loading data. Please wait...';
        this.shoppingCard = new order_model_1.ShoppingCard();
        this.productsBasket = [];
        this.searchCriteria = new order_model_1.SearchCriteria();
        this.items = Array(15).fill(0);
        this.shoppingCard.countOfProducts = 0;
        this.shoppingCard.totalAll = 0;
        this.defaultPageSize = 0;
        this.isEmpltyList = false;
        this.historyPageNumber = 0;
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.searchCriteria.pageNumber = this.defaultPageSize;
        this.loadProducts(this.searchCriteria);
    };
    OrderComponent.prototype.getOrdersByPage = function (pageNumber) {
        this.historyPageNumber = pageNumber;
        //console.log('History Component: ', pageNumber);
    };
    OrderComponent.prototype.loadProducts = function (searchCriteria) {
        var _this = this;
        this._service.getProducts(searchCriteria)
            .subscribe(function (products) {
            _this.productList = products;
            if (_this.productList.length === 0)
                _this.isEmpltyList = true;
            else
                _this.isEmpltyList = false;
        });
    };
    /**
     * this response come from Search Criteria component
     * @param vendor
     */
    OrderComponent.prototype.GetSearchCriteria = function (searchCriteria) {
        this.searchCriteria.categoryId = searchCriteria.categoryId;
        this.searchCriteria.subCategoryId = searchCriteria.subCategoryId;
        this.searchCriteria.vendorId = searchCriteria.vendorId;
        this.searchCriteria.pageNumber = this.defaultPageSize;
        this.loadProducts(searchCriteria);
    };
    OrderComponent.prototype.GetProductsByPage = function (pageNumber) {
        this.searchCriteria.pageNumber = pageNumber;
        this.loadProducts(this.searchCriteria);
    };
    /**
     * this response come from Product list tab
     * on count click, basket summary is updating
     * @param selectedProducts
     */
    OrderComponent.prototype.GetOrderSummary = function (basketSummary) {
        var _this = this;
        this.shoppingCard.countOfProducts = 0;
        this.shoppingCard.totalAll = 0;
        basketSummary.forEach(function (product) {
            _this.shoppingCard.countOfProducts += product.countOfProducts;
            _this.shoppingCard.totalAll += product.totalPrice;
        });
    };
    OrderComponent.prototype.GetSelectedProducts = function (selectedProducts) {
        //selectedProducts.forEach((p) => {
        //    let data = this.productsBasket.find(x => x.productId == p.productId);
        //    if (data === null || data === undefined) {
        //        this.productsBasket.push(p);
        //        //console.log("PUSH TO BASKET: ", data);
        //    }
        //});
        this.productsBasket = selectedProducts;
        //this.shoppingCard.countOfProducts = 0;
        //this.shoppingCard.totalAll = 0;
        //selectedProducts.forEach((product) => {
        //  this.shoppingCard.countOfProducts += product.countOfProducts;
        //  this.shoppingCard.totalAll += product.totalPrice;
        //})
    };
    OrderComponent.prototype.getUserName = function (firstName) {
        return firstName;
    };
    OrderComponent.prototype.displayOrderDetails = function () {
        sweetalert_1.default({
            title: "Order Details",
            text: "OrderID: 44333 \n Product: Paper \n Product: Pencel \n Total: $34 \n Status 1: Approved(RM) \n Status 2: Rejected(OC) \n Comment: This is not a valid order request. Please create anoter one valid!",
            icon: "info",
            dangerMode: true,
        });
    };
    OrderComponent.prototype.removeProduct1 = function () {
        var _this = this;
        sweetalert_1.default({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this product?",
            icon: "warning",
            dangerMode: true
        }).then(function (willDelete) {
            // tuka 6te izvikame logika
            var fullName = _this.getUserName("Pavlin") + " Stefanov";
            if (willDelete) {
                sweetalert_1.default("Removed!", fullName, "success");
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], OrderComponent.prototype, "productList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", order_model_1.ShoppingCard)
    ], OrderComponent.prototype, "shoppingCard", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], OrderComponent.prototype, "productsBasket", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Boolean)
    ], OrderComponent.prototype, "isEmpltyList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Number)
    ], OrderComponent.prototype, "historyPageNumber", void 0);
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order-cmp',
            moduleId: module.id,
            templateUrl: '../view/order.component.html',
            providers: [modal_1.BsModalService, positioning_1.PositioningService, order_service_component_1.OrderService]
        }),
        __metadata("design:paramtypes", [order_service_component_1.OrderService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map