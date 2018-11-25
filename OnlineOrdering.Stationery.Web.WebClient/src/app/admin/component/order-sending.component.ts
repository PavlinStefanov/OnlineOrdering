import { OnInit, Component } from "@angular/core";
//import { Region } from "app/admin/component/user-management.component";

@Component({
    selector: 'order-sending',
    templateUrl:'../view/order-sending.component.html'
})
export class OrderSendingComponent implements OnInit {

    //regions: Region[];

    constructor() {
        //this.regions = [
        //    { regionID: 1, name: '--Select Region-- ' },
        //    { regionID: 2, name: 'Бургас' },
        //    { regionID: 3, name: 'Варна ' },
        //    { regionID: 4, name: 'Велико Търново' },
        //    { regionID: 5, name: 'Видин' },
        //    { regionID: 6, name: 'Плевен' },
        //    { regionID: 7, name: 'Пловдив' },
        //    { regionID: 8, name: 'Русе' },
        //    { regionID: 9, name: 'Сливен' },
        //    { regionID: 10, name: 'София 1' },
        //    { regionID: 11, name: 'София 2' },
        //    { regionID: 12, name: 'Стара Загора' },
        //    { regionID: 13, name: 'Кърджали' },
        //    { regionID: 14, name: 'Централен офис' }
        //]
    }
    ngOnInit() { }
}