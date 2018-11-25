import { OnInit, Component } from "@angular/core";
import { WorkplaceModel, SearchWorkplaceCriteria } from "../model/employee-model";
import { AdminService } from "../service/admin.service";
import { ProductModel, SearchProduct, VendorModel, CategoryModel, GetCategory, SubCatModel } from "../model/product-model";
import { Product } from "../../orders/model/order-model";

@Component({
    selector: 'product-management',
    templateUrl: '../view/product-management.component.html',
    providers: [AdminService]
})
export class ProductManagementComponent implements OnInit {

    product: ProductModel;
    vendors: VendorModel[];
    categories: CategoryModel[];
    subCategories: SubCatModel[];
    find: SearchProduct;
    toPersist: ProductToPersist;
    search: GetCategory;

    constructor(private _service: AdminService) {
        this.product = new ProductModel();
        this.find = new SearchProduct();
        this.toPersist = new ProductToPersist();
        this.vendors = [];
        this.categories = [];
        this.search = new GetCategory();
    }

    ngOnInit() {
        this.getCategories();    
    }

    getCategories(): void {
        this.subCategories = [];
        this._service.getCategories(this.search)
            .subscribe(item => {
                this.vendors = item.vendors;
                if (this.categories.length === 0) {
                    this.categories = item.categories;
                }
                item.categories.forEach(subItem => {
                    subItem.subCats.forEach(s => this.subCategories.push(s));
                });
            });
    }

    SelectedCategory(value: any) {
        this.search.categoryId = value;
        this.getCategories();
        console.log(value);
    }

    getProduct(articuleId: any) {
        this.find.articuleId = articuleId;
        this._service.findProduct(this.find)
            .subscribe(item => this.product = item);
    }
   
    editProduct(product: ProductModel) {
        this.toPersist.description = product.description;
        this.toPersist.articuleId = product.articuleId;
        this.toPersist.name = product.name;
        this.toPersist.unitPrice = product.unitPrice;
        this.toPersist.measure = product.measure
        this.toPersist.subCategoryId
    }
}

export class ProductToPersist {
    vendorId: number;
    subCategoryId: number;
    articuleId: number;
    name: string;
    description: string;
    unitPrice: number;
    measure: string;
}
