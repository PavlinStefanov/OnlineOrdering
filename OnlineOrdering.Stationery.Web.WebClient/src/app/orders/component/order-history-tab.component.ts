import { Component, Output, TemplateRef, OnInit, EventEmitter, PipeTransform, Input} from "@angular/core";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { OrderService } from "../service/order-service.component";
import { OrderSearchCriteria, Constants, OrdersHistory, ProductsHistory } from "../model/order-model";
import { DatePipe } from "@angular/common";
import { SharedDataService } from "../../shared/service/shared-data.service";
import { ValueObjects } from "../../shared/model/shared-model";
//import { Order } from "../../management/component/management.component";

@Component({
    selector: 'order-history-tab',
    templateUrl: '../view/order-history-tab.component.html',
    providers: [BsModalService, PositioningService, DatePipe, OrderService, SharedDataService]
})
export class OrderHistory implements OnInit {

    @Input() historyPageNumber: number;
    colorTheme = 'theme-blue';
    bsConfig: Partial<BsDatepickerConfig>;
    modalRef: BsModalRef;
    switcher: boolean = false;
    orderSC: OrderSearchCriteria = new OrderSearchCriteria();
    _ordersHistory: OrdersHistory[] = [];
    valueObject: ValueObjects = new ValueObjects();
    orderDetails: any;

    constructor(private _service: OrderService, private modalService: BsModalService, public datepipe: DatePipe, private _sharedService: SharedDataService){ }

    checkStatus(status: string): string {
        let alertClass = '';
        if (status === 'Created' || status === 'To be Delivered') {
            alertClass = 'warning';
        }
        else if (status === 'Approved:RM' || status === 'Approved:OC') {
            alertClass = 'success';
        }
        else if (status === 'Rejected:RM' || status === 'Rejected:OC') {
            alertClass = 'danger';
        }
        else if (status === 'Delivered' || status === 'Delivered/Missing') {
            alertClass = 'info';
        }
        return alertClass;
    }

    ngOnChanges() {
        this.orderSC.pageNumber = this.historyPageNumber;
        this.loadOrderHistory();
    }
    ngOnInit() {
        this.bsConfig = Object.assign({ dateInputFormat: 'DD/MM/YYYY' }, { containerClass: this.colorTheme });
        this.loadSharedData();
    }

    
    selectedStatus(value: number): void {
        this.orderSC.statusId = value;
        this.loadOrderHistory();
    }
    selectedUnit(value: any): void {
        this.orderSC.unitId = value;
        this.loadOrderHistory();
    }

    selectedStartDate(value: any): void {
        this.orderSC.startDate = value;
    }
   
    selectedEndDate(value: any): void {
        this.orderSC.endDate = value;
        this.loadOrderHistory();
    }

    loadOrderHistory() {
        this.orderSC.pageNumber = this.historyPageNumber;
        this._service.getOrdersHistory(this.orderSC)
            .subscribe(orders => {
                this._ordersHistory = orders;
            });
    }
   
    loadSharedData() {
        this._sharedService.getValueObjects()
            .subscribe(valueObject => {
                this.valueObject = valueObject
            });
    }

    onOrderStatusChange(statusId: number) {
        console.log("onOrderStatusChange: ", statusId);
    }
    confirmDelivery(order: OrdersHistory[]) {
        console.log(order);
        console.log("DETAILS: ", this.orderDetails);
    }

    onChange(numberID: number) {
        var element = <HTMLInputElement>document.getElementById(numberID.toString());

        if (element.disabled === true) {
            element.disabled = false
        }
        else if (element.disabled === false) {
            element.disabled = true;
        }
    }

    openOrderHistoryModal(orderHistoryModal: TemplateRef<any>, orderId: number) {
        this.orderDetails = this._ordersHistory.filter(order => order.orderId == orderId)
        this.modalRef = this.modalService.show(orderHistoryModal);
    }

    closeOrderHistoryModal() {
        this.modalService.hide(1);
        this.switcher = false;
    }
}
