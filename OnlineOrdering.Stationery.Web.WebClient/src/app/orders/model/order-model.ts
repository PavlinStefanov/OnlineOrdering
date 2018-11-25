
export class Product {
    view: string;
    vendorId: number;
    articulID: number;
    productId: number;
    name: string;
    description: string;
    unitPrice: number;
    measure: string;
    countOfProducts: number;
    totalPrice: number;
}

export class Car{
    id:number;
    name:string;
}
export class SearchCriteria {
    vendorId: string;
    categoryId: string;
    subCategoryId: string;
    pageNumber: number = 0;
}

export class Criteria {
    categoryList: Category[];
    subCategoryList: SubCategory[];
    vendorList: Vendor[];
}

export class Vendor {
    id: number;
    name: string;
}
export class Category extends Vendor { }
export class SubCategory extends Vendor { }

export class ShoppingCard {
    countOfProducts: number;
    totalAll: number;
}

export class OrderSearchCriteria {
    statusId: number;
    unitId: number;
    startDate: string;
    endDate: string;
    pageNumber: number = 0;
}

export class Constants {
    static readonly DATE_FMT = 'dd/MMM/yyyy';
    static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
}

export class CreatedOrder {
    totalAmount: number;
    products: CreatedProduct[];
}

export class CreatedProduct {
    productId: number;
    comment: string;
    quantity: number;
    unitPrice: number;
}

export class OrdersHistory {
    orderId: number;
    employee: string;
    createdDate: string;
    total: number;
    status: string;
    products: ProductsHistory[];
}

export class ProductsHistory {
    productId: number;
    productName: string;
    countOfProducts: number;
    eComment: string;
    rmComment: string;
    ocComment: string;
}