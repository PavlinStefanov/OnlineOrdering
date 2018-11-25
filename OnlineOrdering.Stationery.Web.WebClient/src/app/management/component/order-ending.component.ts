import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { RequestedOrder, OrderCompleteModel } from "../model/management-model";
import { Paginator } from "../../shared/common/paginator";
import { ManagementService } from "../service/management.service";


@Component({
    selector: 'order-ending',
    templateUrl: '../view/order-ending.component.html',
    providers: [ManagementService]
})
export class OrderEndingComponent implements OnInit {

    @Input() orderListToEnd: RequestedOrder[];
    paginator: Paginator;
    @Output() onCompletedOrder: EventEmitter<any> = new EventEmitter<any>();
    toComplete: OrderCompleteModel;

    constructor(private _service: ManagementService) {
        this.toComplete = new OrderCompleteModel();
    }

    ngOnChanges() {
        this.paginator = new Paginator(this.orderListToEnd);
    }

    ngOnInit() { }

    completeOrder(order: RequestedOrder) {
        this.toComplete.orderId = order.orderId;
        this.onCompletedOrder.emit(this.toComplete);
    }
}