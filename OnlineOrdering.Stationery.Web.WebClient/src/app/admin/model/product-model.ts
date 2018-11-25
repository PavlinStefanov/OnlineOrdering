import { expressionType } from "@angular/compiler/src/output/output_ast";

export class ProductModel {
    articuleId: number;
    name: string;
    description: string;
    vendor: string;
    category: string;
    subCategory: string;
    measure: string;
    unitPrice: number;
    view: string;
}

export class SearchProduct {
    articuleId: number;
}

export class GetCategory {
    categoryId: number
}
export class CategoryResultModel {
    vendors: VendorModel[];
    categories: CategoryModel[];
}
export class VendorModel {
    vendorId: number;
    name: string;
}
export class CategoryModel {
    catId: number;
    catName: string;
    subCats: SubCatModel[]
}
export class SubCatModel {
    subId: number;
    subName: string;
}