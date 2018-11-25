import {Component ,OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import * as swal from 'sweetalert';
import swal from 'sweetalert'
import { PositioningService } from 'ngx-bootstrap/positioning';
import { Inplace } from "primeng/primeng";
import { Product } from "../model/order-model";


@Component({
    selector: 'product-list-tab',
    templateUrl: '../view/product-list-tab.component.html'
})
export class ProductListComponent implements  OnInit {

    @Output() onSelectedProducts: EventEmitter<any> = new EventEmitter<any>();
    @Input() products;
    _products: Product[];

    totalAll: number;

    constructor() { }

    ngOnInit() {
        
    }
    ngOnChanges() {
        this._products = this.products;
        this.totalAll = 0;
        //console.log("child component: ", this._products)
    }

    AddProduct(productId: number): void {
        this._products.forEach((product) => {
            if (product.productId == productId) {
                product.countOfProducts += 1;
                product.totalPrice += product.unitPrice;
                this.totalAll += product.unitPrice;
            }
        });
        this.onSelectedProducts.emit(this._products.filter(product => product.countOfProducts > 0));
    }
    RemoveProduct(productId: number): void {
        this._products.forEach((product) => {
            if (product.productId == productId && product.countOfProducts > 0) {
                product.countOfProducts -= 1;
                product.totalPrice -= product.unitPrice;
                this.totalAll -= product.unitPrice;
            }
        });
        this.onSelectedProducts.emit(this._products.filter(product =>  product.countOfProducts > 0));
    }

    getProductsByPage(): void {
     // get selected page by the user
     // send @Output the 
    }
}
