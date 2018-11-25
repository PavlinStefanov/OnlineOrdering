import { Component, Output, TemplateRef, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ManagementService } from '../service/management.service';
import { RequestedOrder, OrderCompleteModel } from '../model/management-model';
import { SharedDataService } from '../../shared/service/shared-data.service';

@Component({
    selector: 'management-cmp',
    moduleId: module.id,
    templateUrl: '../view/management.component.html',
    providers: [BsModalService, ManagementService, SharedDataService]
})

export class ManagementComponent implements OnInit {

    @Output() orderList: RequestedOrder[] = [];
    @Output() _order: RequestedOrder;
    @Output() orderListToEnd: RequestedOrder[] = [];

    constructor(
        private _service: ManagementService,
        private _sharedService: SharedDataService,
        private modalService: BsModalService) { }

    ngOnChanges() {
        this.loadRequestedOrders();
    }
    ngOnInit() {
        this.loadRequestedOrders();
    }

    loadRequestedOrders() {
        this._service.getRequestedOrders()
            .subscribe(orders => {
            this.orderList = orders.filter(item => item.statusId === 1);
            this.orderListToEnd = orders.filter(item => item.statusId === 2 && item.isCompleted === false);
        });
    }

    GetSelectedOrder(order: RequestedOrder): void {
        this._order = order;
    }

    GetCompletedOrder(ord: OrderCompleteModel): void {
        this._service.completeOrder(ord).subscribe(orders => {
            this._service.getRequestedOrders().subscribe(orders => {
                this.orderList = orders.filter(item => item.statusId === 1);
                this.orderListToEnd = orders.filter(item => item.statusId === 2 && item.isCompleted === false);
            });
        });
    }
    GetProcessedOrder(order: RequestedOrder): void { 

      /*  слагам тази проверка, тъй като ако одера е отказан, 
       *  то не трябва да се показава във <order-ending> компонента
       */
        if (order.statusId !== 3) { 
            this.orderListToEnd.push(order);
        }
        this.orderListToEnd = this.orderListToEnd.slice(); // това го сложих след търсене в стек овърфлоу, ngOnChanges() не работи за arrays add/delete change state
        this.orderList.forEach((current) => {
            if (current.orderId === order.orderId) {
                this.orderList = this.orderList.filter(item => item !== current)
            }
        });
    }
}