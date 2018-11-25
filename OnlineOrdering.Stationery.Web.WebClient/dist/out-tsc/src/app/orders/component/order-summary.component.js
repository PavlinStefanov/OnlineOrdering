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
var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
        //shoppingLocalStorage: ShoppingCard = new ShoppingCard();
        this.totalAll = 0;
    }
    /*
    ngOnChanges() {
        this.shoppingLocalStorage = this.shoppingCard;
        this.shoppingLocalStorage.countOfProducts += this.shoppingCard.countOfProducts;
        this.shoppingLocalStorage.totalAll += this.shoppingCard.totalAll;
    }
    */
    OrderSummaryComponent.prototype.ngOnInit = function () {
        //this.totalAll += this.shoppingCard.totalAll;    
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", order_model_1.ShoppingCard)
    ], OrderSummaryComponent.prototype, "shoppingCard", void 0);
    OrderSummaryComponent = __decorate([
        core_1.Component({
            selector: 'order-summary',
            templateUrl: '../view/order-summary.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=order-summary.component.js.map