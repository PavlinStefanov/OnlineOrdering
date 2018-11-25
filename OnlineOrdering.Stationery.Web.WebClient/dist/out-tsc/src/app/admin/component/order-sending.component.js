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
//import { Region } from "app/admin/component/user-management.component";
var OrderSendingComponent = /** @class */ (function () {
    //regions: Region[];
    function OrderSendingComponent() {
        //this.regions = [
        //    { regionID: 1, name: '--Select Region-- ' },
        //    { regionID: 2, name: 'Бургас' },
        //    { regionID: 3, name: 'Варна ' },
        //    { regionID: 4, name: 'Велико Търново' },
        //    { regionID: 5, name: 'Видин' },
        //    { regionID: 6, name: 'Плевен' },
        //    { regionID: 7, name: 'Пловдив' },
        //    { regionID: 8, name: 'Русе' },
        //    { regionID: 9, name: 'Сливен' },
        //    { regionID: 10, name: 'София 1' },
        //    { regionID: 11, name: 'София 2' },
        //    { regionID: 12, name: 'Стара Загора' },
        //    { regionID: 13, name: 'Кърджали' },
        //    { regionID: 14, name: 'Централен офис' }
        //]
    }
    OrderSendingComponent.prototype.ngOnInit = function () { };
    OrderSendingComponent = __decorate([
        core_1.Component({
            selector: 'order-sending',
            templateUrl: '../view/order-sending.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], OrderSendingComponent);
    return OrderSendingComponent;
}());
exports.OrderSendingComponent = OrderSendingComponent;
//# sourceMappingURL=order-sending.component.js.map