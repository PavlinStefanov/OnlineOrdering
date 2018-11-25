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
var car_service_1 = require("./service/car.service");
var modal_1 = require("ngx-bootstrap/modal");
//import * as swal from 'sweetalert';
var sweetalert_1 = require("sweetalert");
var positioning_1 = require("ngx-bootstrap/positioning");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(modalService) {
        this.modalService = modalService;
        this.items = Array(15).fill(0);
    }
    OrdersComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    OrdersComponent.prototype.closeModal = function () {
        this.modalService.hide(1);
    };
    OrdersComponent.prototype.openModal1 = function (template1) {
        this.modalRef = this.modalService.show(template1);
    };
    OrdersComponent.prototype.closeModal1 = function () {
        this.modalService.hide(1);
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['Image', 'Name', 'Country', 'City', 'Price', 'Quantity', 'Total'],
            dataRows: [
                ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    OrdersComponent.prototype.removeProduct = function () {
        sweetalert_1.default({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this product?",
            icon: "warning",
            dangerMode: true,
        }).then(function (willDelete) {
            if (willDelete) {
                sweetalert_1.default("Removed!", "Your product has been remover from basket!", "success");
            }
        });
    };
    OrdersComponent.prototype.displayOrderDetails = function () {
        sweetalert_1.default({
            title: "Order Details",
            text: "OrderID: 44333 \n Product: Paper \n Product: Pencel \n Total: $34 \n Status 1: Approved(RM) \n Status 2: Rejected(OC) \n Comment: This is not a valid order request. Please create anoter one valid!",
            icon: "info",
            dangerMode: true,
        });
    };
    OrdersComponent.prototype.removeProduct1 = function () {
        var _this = this;
        sweetalert_1.default({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this product?",
            icon: "warning",
            dangerMode: true
        }).then(function (willDelete) {
            // tuka 6te izvikame logika
            var fullName = _this.getUserName("Pavlin") + " Stefanov";
            if (willDelete) {
                sweetalert_1.default("Removed!", fullName, "success");
            }
        });
    };
    OrdersComponent.prototype.getUserName = function (firstName) {
        return firstName;
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'orders-cmp',
            moduleId: module.id,
            templateUrl: 'orders.component.html',
            providers: [car_service_1.CarService, modal_1.BsModalService, positioning_1.PositioningService]
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map