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
var order_model_1 = require("../model/order-model");
var order_service_component_1 = require("../service/order-service.component");
//import { OrdersHistory } from "./order-history-tab.component";
var ProductSearchComponent = /** @class */ (function () {
    function ProductSearchComponent(_service) {
        this._service = _service;
        this.onSelectedCriteria = new core_1.EventEmitter();
        this.criteria = new order_model_1.Criteria();
        this.searchCriteria = new order_model_1.SearchCriteria();
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        this.loadCriteria();
    };
    ProductSearchComponent.prototype.loadCriteria = function () {
        var _this = this;
        this._service.getCriteria()
            .subscribe(function (criteria) { _this.criteria = criteria; });
    };
    ProductSearchComponent.prototype.selectedCategory = function (value) {
        this.searchCriteria.categoryId = value;
    };
    ProductSearchComponent.prototype.selectedSubCategory = function (value) {
        this.searchCriteria.subCategoryId = value;
    };
    ProductSearchComponent.prototype.selectedVendor = function (value) {
        this.searchCriteria.vendorId = value;
    };
    ProductSearchComponent.prototype.findProducts = function () {
        this.onSelectedCriteria.emit(this.searchCriteria);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ProductSearchComponent.prototype, "onSelectedCriteria", void 0);
    ProductSearchComponent = __decorate([
        core_1.Component({
            selector: 'product-search',
            templateUrl: '../view/product-search.component.html',
            providers: [order_service_component_1.OrderService]
        }),
        __metadata("design:paramtypes", [order_service_component_1.OrderService])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search.component.js.map