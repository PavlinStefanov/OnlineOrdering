import { OnInit, Component, Output, TemplateRef } from "@angular/core";
import { AdminService } from "../service/admin.service";
import { EmployeeSearch, EmployeeModel, SearchWorkplaceCriteria, WorkplaceModel, UnitModel } from "../model/employee-model";
import { iterateListLike } from "@angular/core/src/change_detection/change_detection_util";
import { SharedDataService } from "../../shared/service/shared-data.service";
import { Job, ValueObjects, Unit } from "../../shared/model/shared-model";
import { concat } from "rxjs/operator/concat";

@Component({
    selector: 'user-management',
    templateUrl: '../view/user-management.component.html'
})
export class UserManagementComponent implements OnInit {
 
    employee: EmployeeModel;
    toPersist: EmployeeToPersist;
    employeeName: EmployeeSearch;
    search: SearchWorkplaceCriteria;
    workplaceList: WorkplaceModel[];
    regions: string[];
    locations: string[];
    units: Unit[];
    jobs: Job[];
    valueObject: ValueObjects;
    empUnit: string;

    constructor(private _service: AdminService, private _shared: SharedDataService) {
        this.employeeName = new EmployeeSearch();
        this.employee = new EmployeeModel();
        this.toPersist = new EmployeeToPersist();
        this.search = new SearchWorkplaceCriteria();
        this.workplaceList = [];
        this.regions = [];
        this.locations = [];
        this.units = [];
        this.jobs = [];
        this.valueObject = new ValueObjects();
    }

    ngOnChanges() {
        
    }
    ngOnInit() {

        this.getWorkplace();
        this._shared.getValueObjects().subscribe(valueObject => {
            this.valueObject = valueObject;
            //valueObject.unitList
        })
    }

    getWorkplace() {
        this.units = []
        this.locations = [];
        this._service.getWorkplace(this.search).subscribe(workplaces => {
            this.workplaceList = workplaces;
            if (this.regions.length === 0) {
                this.workplaceList.forEach(r => {
                    this.regions.push(r.regionName);
                });
            }
            this.workplaceList.forEach((l) => {
                l.locations.forEach((item) => {
                    this.locations.push(item.locationName)
                    item.units.forEach(unit => this.units.push({ "unitId": unit.id, "name": unit.name }));
                });
            });
        });
    }
    getEmployee(employee: string): void {
        this.employeeName.name = employee
        this._service.getEmployeeByName(this.employeeName)
            .subscribe(employee => {
                this.employee = employee;
            });
    }
    /**
     * кое е по правлино? да се върне Id на дадено property, или стойност и във Backend да се вземе Id-то?
     * @param employee
     */
    editEmployee(employee: EmployeeModel): void {
        this.toPersist.firstName = employee.firstName;
        this.toPersist.lastName = employee.lastName;
        this.toPersist.region = employee.region;
        this.toPersist.location = employee.location;
        this.empUnit = employee.unitName;
        
    }

    SelectedJob(value: any) {
        this.toPersist.jobId = value;
    }

    SelectedRegion(value: any) {
        this.toPersist.region = value;
        this.search.unitId = null;
        this.search.location = null;
        this.search.region = value;
        this.getWorkplace();
    }

    SelectedLocation(value: any): void {
        this.toPersist.location = value;
        this.search.location = value;
        this.getWorkplace();
    }

    SelectedUnit(value: any): void {
        this.toPersist.unitId = value;
        this.search.unitId = value;
        this.getWorkplace();
    }

    saveEmployee(): void {
        // call save service function here
        console.log("Employee to save: ", this.toPersist);
    }
}

export class EmployeeToPersist {
    firstName: string;
    lastName: string;
    jobId: number;
    location: string;
    region: string;
    unitId: string;
}
