import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { Inplace } from "primeng/primeng";
import { RequestedOrder, RequestedProduct, SetProductModel, SetOrderModel } from "../model/management-model";
import { SharedDataService } from "../../shared/service/shared-data.service";
import { Status } from "../../shared/model/shared-model";
import { ManagementService } from "../service/management.service";
import { Paginator } from "../../shared/common/paginator";


declare var $: any;

@Component({
    selector: 'products-by-order',
    templateUrl: '../view/products-by-order.component.html',
    providers: [SharedDataService, ManagementService]
})
export class ProductsByOrderComponent implements OnInit {

    @Input() order: RequestedOrder;
    orderStatus: Status[];
    saveStatus: string;
    selectedStatusId: number;
    toUpdatePR: SetProductModel = new SetProductModel();
    toUpdateORD: SetOrderModel = new SetOrderModel();
    @Output() onProcessedOrder: EventEmitter<any> = new EventEmitter<any>();
    productList: RequestedProduct[] = [];
    orderToEnd: RequestedOrder;
    statusStorage: number[] = [];
    paginator: Paginator;

    constructor(private _sharedService: SharedDataService, private _service: ManagementService) { }

    ngOnChanges() {
        this.paginator = new Paginator(this.order.products);
        this.order.isLinked
        //console.log('Paginator: ', this.paginator.getOrderListSequence());
        //console.log('Products: ', this.order.products);
        //this.paginator.getOrderListSequence().length
        //this.getOrderListSequence();
    }

    ngOnInit() {
        this.saveStatus = 'warning';
        this.loadOrderStatus();
    }
    
    loadOrderStatus() {
        this._sharedService.getValueObjects()
            .subscribe(status => {
                this.orderStatus = status.statusList.slice(0, 3);
                console.log("Order Statuses: ", this.orderStatus);
            });
    }

    SelectedOrderStatus(value: any): void {
        this.selectedStatusId = value;
    }

    updateProduct(product: RequestedProduct): void {

        if (this.selectedStatusId !== undefined) {

            product.statusId = this.selectedStatusId;
            this.setProduct(product, this.order.orderId);
            this.statusStorage.push(this.selectedStatusId);
           
            
            this.order.products = this.order.products.filter(i => i !== product);
            this.paginator.setObjectList = this.order.products; 

            if (product.statusId !== 1) {
                this.productList.push(product);
            }

            this.selectedStatusId = undefined;
        }
        else {
            console.log("PRDOUCT " + product.productId + " IS NOT PROCESSED!");
        }

        if (this.order.products.length === 0) {

            this.toUpdateORD.orderId = this.order.orderId;
            this.toUpdateORD.statusId = 3; // тука трябва да се направи проверка, дали е RM or OC, защото във момента работи за RM

            this.orderToEnd = this.order;
            this.orderToEnd.statusId = 3;
           
            this.statusStorage.forEach(item => {
                if (item.toString() === '2') {
                    this.toUpdateORD.statusId = 2;
                    this.orderToEnd.statusId = 2;
                }
            })
            
            this._service.setOrder(this.toUpdateORD).subscribe(i => {
                this._service.getRequestedOrders();
            });
           
            
            if (this.productList.length > 0) {
                this.orderToEnd.products = this.productList;
            }
            this.onProcessedOrder.emit(this.orderToEnd);

            this.order = null;
            this.productList = [];
        }
    }

    setProduct(product: RequestedProduct, orderId: number): void {
        this.toUpdatePR.orderId = orderId;
        this.toUpdatePR.productId = product.productId;
        this.toUpdatePR.comment = product.comment;
        this.toUpdatePR.productsCount = product.productsCount;
        this.toUpdatePR.statusId = this.selectedStatusId;

        this._service.setProduct(this.toUpdatePR).subscribe(order => {
          this._service.getRequestedOrders();
        });
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

        this.saveStatus = 'danger';
    }
}
