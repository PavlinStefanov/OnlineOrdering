import { OnInit, Component, Output, TemplateRef } from "@angular/core";
import { AdminService } from "../service/admin.service";
import { EmployeeSearch, EmployeeModel } from "../model/employee-model";

@Component({
    selector: 'admin-cmp',
    moduleId: module.id,
    templateUrl: '../view/admin.component.html',
    providers: [AdminService]
})
export class AdminComponent implements OnInit {

    //@Output() employee: EmployeeModel;
    //employeeName: EmployeeSearch;

    //constructor(private _service: AdminService) {
    //    this.employeeName = new EmployeeSearch();
    //    this.employee = new EmployeeModel();
    //}

    ngOnInit() {
        //this.employeeName.name = 'Павлин Стефанов'
        //this.getEmployee(this.employeeName);
    }

    //getEmployee(employee: EmployeeSearch) {
    //    this._service.getEmployeeByName(employee)
    //        .subscribe(employee => {
    //            this.employee = employee;
    //            console.log(this.employee);
    //        });
    //}
}