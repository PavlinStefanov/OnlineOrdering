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
var paginator_1 = require("../../shared/common/paginator");
var management_service_1 = require("../service/management.service");
var OrderEndingComponent = /** @class */ (function () {
    function OrderEndingComponent(_service) {
        this._service = _service;
        this.onCompletedOrder = new core_1.EventEmitter();
        this.toComplete = new management_model_1.OrderCompleteModel();
    }
    OrderEndingComponent.prototype.ngOnChanges = function () {
        this.paginator = new paginator_1.Paginator(this.orderListToEnd);
    };
    OrderEndingComponent.prototype.ngOnInit = function () { };
    OrderEndingComponent.prototype.completeOrder = function (order) {
        this.toComplete.orderId = order.orderId;
        this.onCompletedOrder.emit(this.toComplete);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderEndingComponent.prototype, "orderListToEnd", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OrderEndingComponent.prototype, "onCompletedOrder", void 0);
    OrderEndingComponent = __decorate([
        core_1.Component({
            selector: 'order-ending',
            templateUrl: '../view/order-ending.component.html',
            providers: [management_service_1.ManagementService]
        }),
        __metadata("design:paramtypes", [management_service_1.ManagementService])
    ], OrderEndingComponent);
    return OrderEndingComponent;
}());
exports.OrderEndingComponent = OrderEndingComponent;
//# sourceMappingURL=order-ending.component.js.map