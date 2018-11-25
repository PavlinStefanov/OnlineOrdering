import { Component, Output, TemplateRef, OnInit, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import * as swal from 'sweetalert';
import swal from 'sweetalert'
import { PositioningService } from 'ngx-bootstrap/positioning';
import { OrderSendingComponent } from '../../admin/component/order-sending.component';
import { OrderService } from '../service/order-service.component';
import { Product, SearchCriteria, ShoppingCard, OrdersHistory } from '../model/order-model';
import { element } from 'protractor';




interface External {
    notify: Function;
}

@Component({
    selector: 'order-cmp',
    moduleId: module.id,
    templateUrl: '../view/order.component.html',
    providers: [BsModalService, PositioningService, OrderService]
})

export class OrderComponent implements OnInit {

    statusMessage: string = 'Loading data. Please wait...';
    modalRef: BsModalRef;
    items: any[];
    @Output() productList: Product[];
    @Output() shoppingCard: ShoppingCard = new ShoppingCard();
    @Output() productsBasket: Product[] = [];
    @Output() isEmpltyList: boolean;
    @Output() historyPageNumber: number;
    searchCriteria: SearchCriteria = new SearchCriteria();
    defaultPageSize: number;


    constructor(private _service: OrderService) {
        this.items = Array(15).fill(0);
        this.shoppingCard.countOfProducts = 0;
        this.shoppingCard.totalAll = 0;
        this.defaultPageSize = 0;
        this.isEmpltyList = false;
        this.historyPageNumber = 0;
    }

    ngOnInit() {
        this.searchCriteria.pageNumber = this.defaultPageSize;
        this.loadProducts(this.searchCriteria); 
    }

    getOrdersByPage(pageNumber: number): void {
        this.historyPageNumber = pageNumber;
        //console.log('History Component: ', pageNumber);
    }

    loadProducts(searchCriteria: SearchCriteria) {
        this._service.getProducts(searchCriteria)
            .subscribe(products => {
                this.productList = products;
                if (this.productList.length === 0)
                    this.isEmpltyList = true;
                else
                    this.isEmpltyList = false;
            });

        
    }
    /**
     * this response come from Search Criteria component
     * @param vendor
     */
    GetSearchCriteria(searchCriteria: SearchCriteria): void {
        this.searchCriteria.categoryId = searchCriteria.categoryId;
        this.searchCriteria.subCategoryId = searchCriteria.subCategoryId;
        this.searchCriteria.vendorId = searchCriteria.vendorId;
        this.searchCriteria.pageNumber = this.defaultPageSize;
        this.loadProducts(searchCriteria);
    }
    GetProductsByPage(pageNumber: number) {
        this.searchCriteria.pageNumber = pageNumber;
        this.loadProducts(this.searchCriteria);
    }

    /**
     * this response come from Product list tab
     * on count click, basket summary is updating
     * @param selectedProducts
     */
    GetOrderSummary(basketSummary: Product[]) {
        this.shoppingCard.countOfProducts = 0;
        this.shoppingCard.totalAll = 0;

        basketSummary.forEach((product) => {
            this.shoppingCard.countOfProducts += product.countOfProducts;
            this.shoppingCard.totalAll += product.totalPrice;
        });
    }
    GetSelectedProducts(selectedProducts: Product[]): void {

        //selectedProducts.forEach((p) => {
        //    let data = this.productsBasket.find(x => x.productId == p.productId);
        //    if (data === null || data === undefined) {
        //        this.productsBasket.push(p);
        //        //console.log("PUSH TO BASKET: ", data);
        //    }
        //});

        this.productsBasket = selectedProducts;
        //this.shoppingCard.countOfProducts = 0;
        //this.shoppingCard.totalAll = 0;

        //selectedProducts.forEach((product) => {
          //  this.shoppingCard.countOfProducts += product.countOfProducts;
          //  this.shoppingCard.totalAll += product.totalPrice;
        //})
    }

    getUserName(firstName: string): string {
        return firstName;
    }
    displayOrderDetails(): void {
        swal({
            title: "Order Details",
            text: "OrderID: 44333 \n Product: Paper \n Product: Pencel \n Total: $34 \n Status 1: Approved(RM) \n Status 2: Rejected(OC) \n Comment: This is not a valid order request. Please create anoter one valid!",
            icon: "info",
            dangerMode: true,
        });
    }
    removeProduct1(): void {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to remove this product?",
            icon: "warning",
            dangerMode: true
        }).then(willDelete => {
            // tuka 6te izvikame logika
            let fullName = this.getUserName("Pavlin") + " Stefanov";
            if (willDelete) {
                swal("Removed!", fullName, "success");
            }
        });
    }
}