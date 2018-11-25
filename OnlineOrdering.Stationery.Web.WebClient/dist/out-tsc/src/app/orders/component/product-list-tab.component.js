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
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.onSelectedProducts = new core_1.EventEmitter();
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.ngOnChanges = function () {
        this._products = this.products;
        this.totalAll = 0;
        //console.log("child component: ", this._products)
    };
    ProductListComponent.prototype.AddProduct = function (productId) {
        var _this = this;
        this._products.forEach(function (product) {
            if (product.productId == productId) {
                product.countOfProducts += 1;
                product.totalPrice += product.unitPrice;
                _this.totalAll += product.unitPrice;
            }
        });
        this.onSelectedProducts.emit(this._products.filter(function (product) { return product.countOfProducts > 0; }));
    };
    ProductListComponent.prototype.RemoveProduct = function (productId) {
        var _this = this;
        this._products.forEach(function (product) {
            if (product.productId == productId && product.countOfProducts > 0) {
                product.countOfProducts -= 1;
                product.totalPrice -= product.unitPrice;
                _this.totalAll -= product.unitPrice;
            }
        });
        this.onSelectedProducts.emit(this._products.filter(function (product) { return product.countOfProducts > 0; }));
    };
    ProductListComponent.prototype.getProductsByPage = function () {
        // get selected page by the user
        // send @Output the 
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ProductListComponent.prototype, "onSelectedProducts", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "products", void 0);
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list-tab',
            templateUrl: '../view/product-list-tab.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list-tab.component.js.map