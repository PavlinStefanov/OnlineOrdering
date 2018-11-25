import { Component, Output, TemplateRef, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RequestedOrder } from '../model/management-model';


@Component({
    selector: 'order-linking',
    templateUrl: '../view/order-linking.component.html',
    providers: [BsModalService]
})
export class OrderLinkingComponent implements OnInit {

    colorTheme = 'theme-orange';
    bsModalRef: BsModalRef;
    bsConfig: Partial<BsDatepickerConfig>;
    modalRef: BsModalRef;
 
    @Input() orderListToEnd: RequestedOrder[] = [];
    totalOrders: number;
    totalProducts: number;
    totalPrice: number;
    linkedOrders: LinkObject[];
    ordersToLink: LinkObject[];
    region: string;
    regions: Reg[];
    isDisabledReg = true;
    constructor(private modalService: BsModalService) { }

    ngOnChanges() {
        this.loadLinkObjects();
        this.getOrderSummary();
        //this.regions = this.regions.reduce((x, y) => x.findIndex(e => e.region == y.region) < 0 ? [...x, y] : x, [])
        console.log('regions: ', this.regions);
        console.log('reg: ', this.region);
        this.userAuthentication();
    }

    ngOnInit() {
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    }

    userAuthentication(): void {
        // на база на утентикатора ще се подаде стойност на region променливата
        // ако е: РМ ще се вземе името на региона,
        // ако е: ОК ще се оставли undefined
        this.region = 'Варна';
        //this.region = undefined;
        if (this.region === undefined) {
            this.isDisabledReg = false;
        }
    }

    loadLinkObjects(): void {
        this.ordersToLink = [];
        this.linkedOrders = [];
        this.regions = [];
        this.orderListToEnd.map(item => {
                return {
                    orderId: item.orderId,
                    unit: item.unit,
                    region: item.region,
                    totalPrice: item.totalPrice,
                    isLinked: item.isLinked,
                    productsCount: item.productsCount
                };
        }).forEach(item => {
            this.regions.push({ region: item.region });
            this.regions = this.regions.reduce((x, y) => x.findIndex(e => e.region == y.region) < 0 ? [...x, y] : x, []);

            if (item.isLinked === false) {
                this.ordersToLink.push(item);
            }
            else if (item.isLinked === true) {
                this.linkedOrders.push(item);
            }
        })
    }

    removeFromLinkedOrders(order: any): void {
        const index: number = this.linkedOrders.indexOf(order);
        this.linkedOrders.splice(index, 1);
        this.ordersToLink.push(order);
        this.getOrderSummary();
    }
    SelectedRegionToLink(value: any): void {
        //console.log('Selected Region: ', value);
        this.ordersToLink = this.ordersToLink.filter(item => item.region === value);
        console.log(this.ordersToLink)
        this.region = value;
        this.getOrderSummary();
    }
    SelectedOrderToLink(value: number): void {
        this.ordersToLink.forEach((item, index) => {
            if (item.orderId === Number(value)) {
                this.ordersToLink.splice(index, 1);
                this.linkedOrders.push(item);
            }
        });
        this.getOrderSummary();
    }

    getOrderSummary(): void {
        this.totalOrders = 0;
        this.totalPrice = 0;
        this.totalProducts = 0;

        this.linkedOrders.forEach(item => {
            this.totalPrice += item.totalPrice;
            this.totalOrders += 1;
            this.totalProducts += item.productsCount;
        });
    }

    saveLinkedOrders(): void {
    // save linked orders service need to be called here..
        console.log("ORDERS TO CREATE IN LINK: ", this.linkedOrders);
    }


    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
    closeModal() {
        this.modalService.hide(1);
    }
    trackByPeople(index: number, person: any) {
        return person.id;
    }
    forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}

export class Reg {
    region: string;
}
export class LinkObject {
    orderId: number;
    unit: string;
    region: string;
    totalPrice: number;
    productsCount: number;
}