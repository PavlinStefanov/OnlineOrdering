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
var paginator_1 = require("../../shared/common/paginator");
var OrderCreatedComponent = /** @class */ (function () {
    function OrderCreatedComponent() {
        // this.start = 0;
        // this.end = 4;
        // this.step = 1;
        this.onSelectedOrder = new core_1.EventEmitter();
    }
    OrderCreatedComponent.prototype.ngOnChanges = function () {
        this.paginator = new paginator_1.Paginator(this.orderList);
        //console.log('Paginator: ', this.paginator.getOrderListSequence());
        //this.paginator.GetPrev
        //this.getOrderListSequence();
    };
    OrderCreatedComponent.prototype.GetOrderDetails = function (order) {
        this.onSelectedOrder.emit(order);
    };
    //GetNext() {
    //    this.start += 1;
    //    this.end += 1;
    //    console.log(this.getOrderListSequence());
    //}
    //checkForUndifined(): boolean {
    //    let undifinedOrder = false;
    //    this.getOrderListSequence().forEach(order => {
    //        if (order == undefined) {
    //            undifinedOrder = true;
    //        }
    //    });
    //    return undifinedOrder;
    //}
    //GetPrev() {
    //    this.start -= 1;
    //    this.end -= 1;
    //}
    //getOrderListSequence() {
    //    return this.range(this.start, this.end, this.step);
    //}
    OrderCreatedComponent.prototype.range = function (start, edge, step) {
        // If only one number was passed in make it the edge and 0 the start.
        if (arguments.length == 1) {
            edge = start;
            start = 0;
        }
        // Validate the edge and step numbers.
        edge = edge || 0;
        step = step || 1;
        for (var ret = []; (edge - start) * step > 0; start += step) {
            ret.push(this.orderList[start]);
        }
        return ret;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderCreatedComponent.prototype, "orderList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OrderCreatedComponent.prototype, "onSelectedOrder", void 0);
    OrderCreatedComponent = __decorate([
        core_1.Component({
            selector: 'order-created',
            templateUrl: '../view/order-created.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], OrderCreatedComponent);
    return OrderCreatedComponent;
}());
exports.OrderCreatedComponent = OrderCreatedComponent;
//# sourceMappingURL=order-created.component.js.map