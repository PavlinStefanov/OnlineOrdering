import { Component, Output, TemplateRef, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ManagementService } from '../../management/service/management.service';
import { RequestedOrder, RequestedProduct, SetProductModel } from '../../management/model/management-model';
import { SharedDataService } from '../../shared/service/shared-data.service';
import { Status } from '../../shared/model/shared-model';
import { CreatedOrder, CreatedProduct } from '../../orders/model/order-model';


@Component({
    selector: 'management-cmp',
    moduleId: module.id,
    templateUrl: '../view/test.component.html',
    providers: [BsModalService, ManagementService, SharedDataService]
})

export class TestComponent implements OnInit {

    saveStatus: string;
    orderList: RequestedOrder[] = [];
    //selectedOrderToExport: RequestedOrder;
    orderStatus: Status[];
    selectedStatusId: number;

    product: RequestedProduct;
    productLis: RequestedProduct[] = [];
    orderToEnd: RequestedOrder;
    orderListToEnd: RequestedOrder[] = [];

    _order: RequestedOrder; 
   // orderToEnd: RequestedOrder;
    colorTheme = 'theme-orange';
    bsModalRef: BsModalRef;
    bsConfig: Partial<BsDatepickerConfig>;
    modalRef: BsModalRef;
    linkedOrderList: any[] = [];
    ordersToLinck: number[] = [];

    toUpdate: SetProductModel = new SetProductModel();

    constructor(private _service: ManagementService, private _sharedService: SharedDataService, private modalService: BsModalService) { }

    ngOnInit() {
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
    }

    getOrdersToEnd() {

    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    closeModal() {
        this.modalService.hide(1);
    }

    loadRequestedOrders() {
        this._service.getRequestedOrders().subscribe(orders => {
            this.orderList = orders.filter(item => item.statusId === 1);
            this.orderListToEnd = orders.filter(item => item.statusId !== 1);
            this.orderListToEnd.forEach((item) => {
                this.ordersToLinck.push(item.orderId);
            });
            console.log("REQUESTED ORDERS: ", this.orderListToEnd);
        });
    }

    loadOrderStatus() {
        this._sharedService.getValueObjects()
            .subscribe(status => {
                this.orderStatus = status.statusList.slice(0, 3);
            });
    }

    getOrderDetails(order: RequestedOrder): void {
        this._order = order;
    }

    SelectedOrderStatus(value: any): void {
        this.selectedStatusId = value;
    }

    SelectedOrderToLink(value: any): void {
        this.linkedOrderList.push(value);
        console.log("LINKED: ", this.linkedOrderList);
        const index: number = this.ordersToLinck.indexOf(value);
        this.ordersToLinck.splice(index);
        console.log("TO LINK: ", this.ordersToLinck);
    }

    updateProduct(product: RequestedProduct) {
        //this.showNotification('top', 'center', 2, product)
        product.statusId = this.selectedStatusId;
        if (product.statusId !== undefined) {

            this.setProduct(product, this._order.orderId);
            if (product.statusId !== 3) {
                this._order.statusId = product.statusId;
                this._order.products = this._order.products.filter(i => i !== product);
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
    }

    setProduct(product: RequestedProduct, orderId: number): void {

        this.toUpdate.orderId = orderId;
        this.toUpdate.productId = product.productId;
        this.toUpdate.comment = product.comment;
        this.toUpdate.productsCount = product.productsCount;
        this.toUpdate.statusId = product.statusId;
        
        this._service.setProduct(this.toUpdate).subscribe(order => {
            this._service.getRequestedOrders();
        });
    }

    removeFromLinked(order: any): void {
        const index: number = this.linkedOrderList.indexOf(order);
        this.linkedOrderList.splice(index);
    }
    saveLinkedOrder(): void {
        console.log("ORDERS TO CREATE IN LINK: ", this.linkedOrderList);
    }


    onChange(numberID: number, articuleId: number, numPlusName: string) {
        var element = <HTMLInputElement>document.getElementById(numberID.toString());
        var elementByName = <HTMLInputElement>document.getElementById(articuleId.toString());
        var elementByNumPlusName = <HTMLInputElement>document.getElementById(numPlusName);

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
    }
}
