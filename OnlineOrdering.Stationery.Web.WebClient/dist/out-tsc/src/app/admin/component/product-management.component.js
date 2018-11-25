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
var admin_service_1 = require("../service/admin.service");
var product_model_1 = require("../model/product-model");
var ProductManagementComponent = /** @class */ (function () {
    function ProductManagementComponent(_service) {
        this._service = _service;
        this.product = new product_model_1.ProductModel();
        this.find = new product_model_1.SearchProduct();
        this.toPersist = new ProductToPersist();
        this.vendors = [];
        this.categories = [];
        this.search = new product_model_1.GetCategory();
    }
    ProductManagementComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    ProductManagementComponent.prototype.getCategories = function () {
        var _this = this;
        this.subCategories = [];
        this._service.getCategories(this.search)
            .subscribe(function (item) {
            _this.vendors = item.vendors;
            if (_this.categories.length === 0) {
                _this.categories = item.categories;
            }
            item.categories.forEach(function (subItem) {
                subItem.subCats.forEach(function (s) { return _this.subCategories.push(s); });
            });
        });
    };
    ProductManagementComponent.prototype.SelectedCategory = function (value) {
        this.search.categoryId = value;
        this.getCategories();
        console.log(value);
    };
    ProductManagementComponent.prototype.getProduct = function (articuleId) {
        var _this = this;
        this.find.articuleId = articuleId;
        this._service.findProduct(this.find)
            .subscribe(function (item) { return _this.product = item; });
    };
    ProductManagementComponent.prototype.editProduct = function (product) {
        this.toPersist.description = product.description;
        this.toPersist.articuleId = product.articuleId;
        this.toPersist.name = product.name;
        this.toPersist.unitPrice = product.unitPrice;
        this.toPersist.measure = product.measure;
        this.toPersist.subCategoryId;
    };
    ProductManagementComponent = __decorate([
        core_1.Component({
            selector: 'product-management',
            templateUrl: '../view/product-management.component.html',
            providers: [admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], ProductManagementComponent);
    return ProductManagementComponent;
}());
exports.ProductManagementComponent = ProductManagementComponent;
var ProductToPersist = /** @class */ (function () {
    function ProductToPersist() {
    }
    return ProductToPersist;
}());
exports.ProductToPersist = ProductToPersist;
//# sourceMappingURL=product-management.component.js.map