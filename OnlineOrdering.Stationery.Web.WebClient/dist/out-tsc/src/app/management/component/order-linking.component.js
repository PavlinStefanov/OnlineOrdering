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
var OrderLinkingComponent = /** @class */ (function () {
    function OrderLinkingComponent(modalService) {
        this.modalService = modalService;
        this.colorTheme = 'theme-orange';
        this.orderListToEnd = [];
        this.isDisabledReg = true;
    }
    OrderLinkingComponent.prototype.ngOnChanges = function () {
        this.loadLinkObjects();
        this.getOrderSummary();
        //this.regions = this.regions.reduce((x, y) => x.findIndex(e => e.region == y.region) < 0 ? [...x, y] : x, [])
        console.log('regions: ', this.regions);
        console.log('reg: ', this.region);
        this.userAuthentication();
    };
    OrderLinkingComponent.prototype.ngOnInit = function () {
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    };
    OrderLinkingComponent.prototype.userAuthentication = function () {
        // на база на утентикатора ще се подаде стойност на region променливата
        // ако е: РМ ще се вземе името на региона,
        // ако е: ОК ще се оставли undefined
        this.region = 'Варна';
        //this.region = undefined;
        if (this.region === undefined) {
            this.isDisabledReg = false;
        }
    };
    OrderLinkingComponent.prototype.loadLinkObjects = function () {
        var _this = this;
        this.ordersToLink = [];
        this.linkedOrders = [];
        this.regions = [];
        this.orderListToEnd.map(function (item) {
            return {
                orderId: item.orderId,
                unit: item.unit,
                region: item.region,
                totalPrice: item.totalPrice,
                isLinked: item.isLinked,
                productsCount: item.productsCount
            };
        }).forEach(function (item) {
            _this.regions.push({ region: item.region });
            _this.regions = _this.regions.reduce(function (x, y) { return x.findIndex(function (e) { return e.region == y.region; }) < 0 ? x.concat([y]) : x; }, []);
            if (item.isLinked === false) {
                _this.ordersToLink.push(item);
            }
            else if (item.isLinked === true) {
                _this.linkedOrders.push(item);
            }
        });
    };
    OrderLinkingComponent.prototype.removeFromLinkedOrders = function (order) {
        var index = this.linkedOrders.indexOf(order);
        this.linkedOrders.splice(index, 1);
        this.ordersToLink.push(order);
        this.getOrderSummary();
    };
    OrderLinkingComponent.prototype.SelectedRegionToLink = function (value) {
        //console.log('Selected Region: ', value);
        this.ordersToLink = this.ordersToLink.filter(function (item) { return item.region === value; });
        console.log(this.ordersToLink);
        this.region = value;
        this.getOrderSummary();
    };
    OrderLinkingComponent.prototype.SelectedOrderToLink = function (value) {
        var _this = this;
        this.ordersToLink.forEach(function (item, index) {
            if (item.orderId === Number(value)) {
                _this.ordersToLink.splice(index, 1);
                _this.linkedOrders.push(item);
            }
        });
        this.getOrderSummary();
    };
    OrderLinkingComponent.prototype.getOrderSummary = function () {
        var _this = this;
        this.totalOrders = 0;
        this.totalPrice = 0;
        this.totalProducts = 0;
        this.linkedOrders.forEach(function (item) {
            _this.totalPrice += item.totalPrice;
            _this.totalOrders += 1;
            _this.totalProducts += item.productsCount;
        });
    };
    OrderLinkingComponent.prototype.saveLinkedOrders = function () {
        // save linked orders service need to be called here..
        console.log("ORDERS TO CREATE IN LINK: ", this.linkedOrders);
    };
    OrderLinkingComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    OrderLinkingComponent.prototype.closeModal = function () {
        this.modalService.hide(1);
    };
    OrderLinkingComponent.prototype.trackByPeople = function (index, person) {
        return person.id;
    };
    OrderLinkingComponent.prototype.forLoopArray = function (elements) {
        return new Array(elements);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderLinkingComponent.prototype, "orderListToEnd", void 0);
    OrderLinkingComponent = __decorate([
        core_1.Component({
            selector: 'order-linking',
            templateUrl: '../view/order-linking.component.html',
            providers: [modal_1.BsModalService]
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService])
    ], OrderLinkingComponent);
    return OrderLinkingComponent;
}());
exports.OrderLinkingComponent = OrderLinkingComponent;
var Reg = /** @class */ (function () {
    function Reg() {
    }
    return Reg;
}());
exports.Reg = Reg;
var LinkObject = /** @class */ (function () {
    function LinkObject() {
    }
    return LinkObject;
}());
exports.LinkObject = LinkObject;
//# sourceMappingURL=order-linking.component.js.map