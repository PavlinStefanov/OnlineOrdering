import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { RequestedOrder } from "../model/management-model";
import { retry } from "rxjs/operator/retry";
import { Paginator } from "../../shared/common/paginator";

@Component({
    selector: 'order-created',
    templateUrl:'../view/order-created.component.html'
})
export class OrderCreatedComponent {

    @Input() orderList: RequestedOrder[];
    @Output() onSelectedOrder: EventEmitter<any> = new EventEmitter<any>();
    //start: number;
    //end: number;
    //step: number;
    paginator: Paginator;

    constructor() {
       // this.start = 0;
       // this.end = 4;
        // this.step = 1;
        
    }
    ngOnChanges() {
        this.paginator = new Paginator(this.orderList);
        //console.log('Paginator: ', this.paginator.getOrderListSequence());
        //this.paginator.GetPrev
        //this.getOrderListSequence();
    }
   

    GetOrderDetails(order: RequestedOrder): void {
        this.onSelectedOrder.emit(order);
    }

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

    range(start, edge, step) {
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
    }
}