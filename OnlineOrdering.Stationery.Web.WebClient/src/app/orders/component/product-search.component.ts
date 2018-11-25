import {Component, Output, OnInit, Input, EventEmitter } from "@angular/core";
import { calcBindingFlags } from "@angular/core/src/view/util";
import { SearchCriteria, Vendor, Category, SubCategory, Criteria } from "../model/order-model";
import { OrderService } from "../service/order-service.component";
//import { OrdersHistory } from "./order-history-tab.component";

@Component({
    selector: 'product-search',
    templateUrl: '../view/product-search.component.html',
    providers: [OrderService]
})
export class ProductSearchComponent implements OnInit {

    @Output() onSelectedCriteria: EventEmitter<any> = new EventEmitter<any>();
    criteria: Criteria = new Criteria();
    searchCriteria: SearchCriteria = new SearchCriteria();

    constructor(private _service: OrderService) { }

    ngOnInit() {
        this.loadCriteria();
    }

    loadCriteria() {
        this._service.getCriteria()
            .subscribe(criteria => { this.criteria = criteria });
    }
    selectedCategory(value: any): void {
        this.searchCriteria.categoryId = value;
    }

    selectedSubCategory(value: any): void {
        this.searchCriteria.subCategoryId = value;
    }

    selectedVendor(value: any): void {
        this.searchCriteria.vendorId = value;
    }

    findProducts(): void {
        this.onSelectedCriteria.emit(this.searchCriteria);
    }
}


