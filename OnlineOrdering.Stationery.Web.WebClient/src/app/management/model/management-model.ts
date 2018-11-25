
export class RequestedOrder {
    orderId: number;
    unit: string;
    region: string;
    employee: string;
    statusId: number;
    productsCount: number;
    isLinked: boolean;
    isCompleted: boolean;
    totalPrice: number;
    products: RequestedProduct[];
}

export class RequestedProduct {
    productId: number;
    articuleId: number;
    productName: string;
    unitPrice: number;
    totalPrice: number;
    productsCount: number;
    statusId: number;
    comment: string;
}

export class SetOrderModel {
    orderId: number;
    statusId: number;
}
export class SetProductModel {
    orderId: number;
    productId: number;
    comment: string;
    productsCount: number;
    statusId: number;
}

export class OrderCompleteModel {
    orderId: number;
}