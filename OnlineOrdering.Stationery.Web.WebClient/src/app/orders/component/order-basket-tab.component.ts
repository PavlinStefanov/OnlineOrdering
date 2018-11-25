import { Component, Output, TemplateRef, OnInit, Input, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import * as swal from 'sweetalert';
import swal from 'sweetalert'
import { PositioningService } from 'ngx-bootstrap/positioning';
import { Product, CreatedOrder, CreatedProduct } from '../model/order-model';
import { OrderService } from '../service/order-service.component';
import { error } from 'util';
import { andObservables } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'order-basket-tab',
    templateUrl: '../view/order-basket-tab.component.html',
    providers: [BsModalService, PositioningService, OrderService]
})
export class OrderBasketComponent implements OnInit {

    modalRef: BsModalRef;
    @Output() onOrderSummary: EventEmitter<any> = new EventEmitter<any>();
    @Input() productsBasket: Product[];
    _productsBasket: Product[] = [];
    _product: Product = new Product();
    totalAll: number = 0;
    comment: string;
    createdOrder: CreatedOrder = new CreatedOrder();
    createdProduct: CreatedProduct;
    productsList: CreatedProduct[] = [];

    constructor(private modalService: BsModalService, private _service: OrderService) { }

    ngOnInit() {
        
    }
    ngOnChanges() {
        this.productsBasket.forEach((p) => {
            let data = this._productsBasket.find(x => x.productId == p.productId);
            if (data === null || data === undefined) {
                this._productsBasket.push(p);
            }
        });
        this.getTotalAll();
        this.onOrderSummary.emit(this._productsBasket);
    }
    
    getTotalAll() {
        this.totalAll = 0;
        this._productsBasket.forEach(product => this.totalAll += product.totalPrice);
    }

    openBasketsProductModal(template: TemplateRef<any>, product: Product) {
        this.modalRef = this.modalService.show(template);
        this._product = product;
    }

    createOrder(): void {

        this.productsList = this._productsBasket.map(p => {
            return { productId: p.productId, comment: 'empty string', quantity: p.countOfProducts, unitPrice: p.unitPrice };
        });
        
        this.createdOrder.products = this.productsList;
        this.createdOrder.totalAmount = this.totalAll;
        //console.log("Created Order: ", this.createdOrder);
        //console.log("--: ", this._productsBasket);
        this._service.createOrder(this.createdOrder)
            .subscribe(
                data => {
                    this._productsBasket;
                    return true;
                },
                error => {
                    console.error("Error saving order!");
                    return Observable.throw(error);
                });
    }

    saveProduct() {
        this._productsBasket.forEach((item) => {
            if (item.productId == this._product.productId) {
                item.totalPrice = this._product.countOfProducts * this._product.unitPrice;
            }   
        });
        this.getTotalAll();
        this.closeModal();
        this.onOrderSummary.emit(this._productsBasket);
    }



    removeProduct(productId: number): void {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this product?",
            icon: "warning",
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                this._productsBasket.forEach((product, index) => {
                    if (product.productId === productId) {
                        this._productsBasket.splice(index, 1);
                        this.onOrderSummary.emit(this._productsBasket);
                    }
                })
                swal("Removed!", "Your product has been remover from basket!", "success");
                this.getTotalAll();
            }
        });
    }
    closeModal() {
        this.modalService.hide(1);
    }
}