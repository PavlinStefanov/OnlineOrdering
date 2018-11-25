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
var management_service_1 = require("../../management/service/management.service");
var management_model_1 = require("../../management/model/management-model");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var TestComponent = /** @class */ (function () {
    function TestComponent(_service, _sharedService, modalService) {
        this._service = _service;
        this._sharedService = _sharedService;
        this.modalService = modalService;
        this.orderList = [];
        this.productLis = [];
        this.orderListToEnd = [];
        // orderToEnd: RequestedOrder;
        this.colorTheme = 'theme-orange';
        this.linkedOrderList = [];
        this.ordersToLinck = [];
        this.toUpdate = new management_model_1.SetProductModel();
    }
    TestComponent.prototype.ngOnInit = function () {
        this.saveStatus = 'warning';
        this.loadRequestedOrders();
        this.loadOrderStatus();
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
        //this.ordersToLinck = [
        //    { "orderID": "-- Select Order --" },
        //    { "orderID": "456" },
        //    { "orderID": "112" },
        //    { "orderID": "998" },
        //];
        //this.linkedOrderList = [
        //    { "orderID": "334" },
        //    { "orderID": "452" },
        //    { "orderID": "214" },
        //    { "orderID": "788" },
        //    { "orderID": "214" }
        //];
    };
    TestComponent.prototype.getOrdersToEnd = function () {
    };
    TestComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TestComponent.prototype.closeModal = function () {
        this.modalService.hide(1);
    };
    TestComponent.prototype.loadRequestedOrders = function () {
        var _this = this;
        this._service.getRequestedOrders().subscribe(function (orders) {
            _this.orderList = orders.filter(function (item) { return item.statusId === 1; });
            _this.orderListToEnd = orders.filter(function (item) { return item.statusId !== 1; });
            _this.orderListToEnd.forEach(function (item) {
                _this.ordersToLinck.push(item.orderId);
            });
            console.log("REQUESTED ORDERS: ", _this.orderListToEnd);
        });
    };
    TestComponent.prototype.loadOrderStatus = function () {
        var _this = this;
        this._sharedService.getValueObjects()
            .subscribe(function (status) {
            _this.orderStatus = status.statusList.slice(0, 3);
        });
    };
    TestComponent.prototype.getOrderDetails = function (order) {
        this._order = order;
    };
    TestComponent.prototype.SelectedOrderStatus = function (value) {
        this.selectedStatusId = value;
    };
    TestComponent.prototype.SelectedOrderToLink = function (value) {
        this.linkedOrderList.push(value);
        console.log("LINKED: ", this.linkedOrderList);
        var index = this.ordersToLinck.indexOf(value);
        this.ordersToLinck.splice(index);
        console.log("TO LINK: ", this.ordersToLinck);
    };
    TestComponent.prototype.updateProduct = function (product) {
        //this.showNotification('top', 'center', 2, product)
        product.statusId = this.selectedStatusId;
        if (product.statusId !== undefined) {
            this.setProduct(product, this._order.orderId);
            if (product.statusId !== 3) {
                this._order.statusId = product.statusId;
                this._order.products = this._order.products.filter(function (i) { return i !== product; });
                this.productLis.push(product);
            }
            this.selectedStatusId = undefined;
        }
        else {
            console.log("PRDOUCT " + product.productId + " IS NOT PROCESSED!");
        }
        //if (this._order.products.length === 0) {
        //    this._service.setOrder(this._order.orderId).subscribe(i => {
        //        this._service.getRequestedOrders();
        //    });
        //    this.orderToEnd = this._order;
        //    this.orderToEnd.products = this.productLis;
        //    this.orderListToEnd.push(this.orderToEnd)
        //    this.ordersToLinck.push(this.orderToEnd.orderId);
        //    this.orderList = this.orderList.filter(i => i !== this._order);
        //    this._order = null;
        //}
        //this.saveStatus = 'success';
    };
    TestComponent.prototype.setProduct = function (product, orderId) {
        var _this = this;
        this.toUpdate.orderId = orderId;
        this.toUpdate.productId = product.productId;
        this.toUpdate.comment = product.comment;
        this.toUpdate.productsCount = product.productsCount;
        this.toUpdate.statusId = product.statusId;
        this._service.setProduct(this.toUpdate).subscribe(function (order) {
            _this._service.getRequestedOrders();
        });
    };
    TestComponent.prototype.removeFromLinked = function (order) {
        var index = this.linkedOrderList.indexOf(order);
        this.linkedOrderList.splice(index);
    };
    TestComponent.prototype.saveLinkedOrder = function () {
        console.log("ORDERS TO CREATE IN LINK: ", this.linkedOrderList);
    };
    TestComponent.prototype.onChange = function (numberID, articuleId, numPlusName) {
        var element = document.getElementById(numberID.toString());
        var elementByName = document.getElementById(articuleId.toString());
        var elementByNumPlusName = document.getElementById(numPlusName);
        if (element.disabled === true || elementByName.disabled === true || elementByNumPlusName.disabled === true) {
            element.disabled = false;
            elementByName.disabled = false;
            elementByNumPlusName.disabled = false;
        }
        else if (element.disabled === false || elementByName.disabled === false || elementByNumPlusName.disabled === false) {
            element.disabled = true;
            elementByName.disabled = true;
            elementByNumPlusName.disabled = true;
        }
        //this.saveStatus = 'danger';
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'management-cmp',
            moduleId: module.id,
            templateUrl: '../view/test.component.html',
            providers: [modal_1.BsModalService, management_service_1.ManagementService, shared_data_service_1.SharedDataService]
        }),
        __metadata("design:paramtypes", [management_service_1.ManagementService, shared_data_service_1.SharedDataService, modal_1.BsModalService])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.comonent.js.map