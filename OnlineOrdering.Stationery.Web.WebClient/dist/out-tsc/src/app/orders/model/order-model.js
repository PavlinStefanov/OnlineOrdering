"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
exports.Car = Car;
var SearchCriteria = /** @class */ (function () {
    function SearchCriteria() {
        this.pageNumber = 0;
    }
    return SearchCriteria;
}());
exports.SearchCriteria = SearchCriteria;
var Criteria = /** @class */ (function () {
    function Criteria() {
    }
    return Criteria;
}());
exports.Criteria = Criteria;
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    return Vendor;
}());
exports.Vendor = Vendor;
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Category;
}(Vendor));
exports.Category = Category;
var SubCategory = /** @class */ (function (_super) {
    __extends(SubCategory, _super);
    function SubCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubCategory;
}(Vendor));
exports.SubCategory = SubCategory;
var ShoppingCard = /** @class */ (function () {
    function ShoppingCard() {
    }
    return ShoppingCard;
}());
exports.ShoppingCard = ShoppingCard;
var OrderSearchCriteria = /** @class */ (function () {
    function OrderSearchCriteria() {
        this.pageNumber = 0;
    }
    return OrderSearchCriteria;
}());
exports.OrderSearchCriteria = OrderSearchCriteria;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DATE_FMT = 'dd/MMM/yyyy';
    Constants.DATE_TIME_FMT = Constants.DATE_FMT + " hh:mm:ss";
    return Constants;
}());
exports.Constants = Constants;
var CreatedOrder = /** @class */ (function () {
    function CreatedOrder() {
    }
    return CreatedOrder;
}());
exports.CreatedOrder = CreatedOrder;
var CreatedProduct = /** @class */ (function () {
    function CreatedProduct() {
    }
    return CreatedProduct;
}());
exports.CreatedProduct = CreatedProduct;
var OrdersHistory = /** @class */ (function () {
    function OrdersHistory() {
    }
    return OrdersHistory;
}());
exports.OrdersHistory = OrdersHistory;
var ProductsHistory = /** @class */ (function () {
    function ProductsHistory() {
    }
    return ProductsHistory;
}());
exports.ProductsHistory = ProductsHistory;
//# sourceMappingURL=order-model.js.map