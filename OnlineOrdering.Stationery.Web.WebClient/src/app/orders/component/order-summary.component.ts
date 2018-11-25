import { Component, OnInit, Output, Input } from "@angular/core";
import { ShoppingCard } from "../model/order-model";

@Component({
    selector: 'order-summary',
    templateUrl: '../view/order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

    @Input() shoppingCard: ShoppingCard;
    //shoppingLocalStorage: ShoppingCard = new ShoppingCard();
    totalAll: number = 0;

    constructor() { }

    /*
    ngOnChanges() {
        this.shoppingLocalStorage = this.shoppingCard;
        this.shoppingLocalStorage.countOfProducts += this.shoppingCard.countOfProducts;
        this.shoppingLocalStorage.totalAll += this.shoppingCard.totalAll;
    }
    */

    ngOnInit() {
        //this.totalAll += this.shoppingCard.totalAll;    
    }
}
