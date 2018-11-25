"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var admin_service_1 = require("../service/admin.service");
var employee_model_1 = require("../model/employee-model");
var shared_data_service_1 = require("../../shared/service/shared-data.service");
var shared_model_1 = require("../../shared/model/shared-model");
var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(_service, _shared) {
        this._service = _service;
        this._shared = _shared;
        this.employeeName = new employee_model_1.EmployeeSearch();
        this.employee = new employee_model_1.EmployeeModel();
        this.toPersist = new EmployeeToPersist();
        this.search = new employee_model_1.SearchWorkplaceCriteria();
        this.workplaceList = [];
        this.regions = [];
        this.locations = [];
        this.units = [];
        this.jobs = [];
        this.valueObject = new shared_model_1.ValueObjects();
    }
    UserManagementComponent.prototype.ngOnChanges = function () {
    };
    UserManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getWorkplace();
        this._shared.getValueObjects().subscribe(function (valueObject) {
            _this.valueObject = valueObject;
            //valueObject.unitList
        });
    };
    UserManagementComponent.prototype.getWorkplace = function () {
        var _this = this;
        this.units = [];
        this.locations = [];
        this._service.getWorkplace(this.search).subscribe(function (workplaces) {
            _this.workplaceList = workplaces;
            if (_this.regions.length === 0) {
                _this.workplaceList.forEach(function (r) {
                    _this.regions.push(r.regionName);
                });
            }
            _this.workplaceList.forEach(function (l) {
                l.locations.forEach(function (item) {
                    _this.locations.push(item.locationName);
                    item.units.forEach(function (unit) { return _this.units.push({ "unitId": unit.id, "name": unit.name }); });
                });
            });
        });
    };
    UserManagementComponent.prototype.getEmployee = function (employee) {
        var _this = this;
        this.employeeName.name = employee;
        this._service.getEmployeeByName(this.employeeName)
            .subscribe(function (employee) {
            _this.employee = employee;
        });
    };
    /**
     * кое е по правлино? да се върне Id на дадено property, или стойност и във Backend да се вземе Id-то?
     * @param employee
     */
    UserManagementComponent.prototype.editEmployee = function (employee) {
        this.toPersist.firstName = employee.firstName;
        this.toPersist.lastName = employee.lastName;
        this.toPersist.region = employee.region;
        this.toPersist.location = employee.location;
        this.empUnit = employee.unitName;
    };
    UserManagementComponent.prototype.SelectedJob = function (value) {
        this.toPersist.jobId = value;
    };
    UserManagementComponent.prototype.SelectedRegion = function (value) {
        this.toPersist.region = value;
        this.search.unitId = null;
        this.search.location = null;
        this.search.region = value;
        this.getWorkplace();
    };
    UserManagementComponent.prototype.SelectedLocation = function (value) {
        this.toPersist.location = value;
        this.search.location = value;
        this.getWorkplace();
    };
    UserManagementComponent.prototype.SelectedUnit = function (value) {
        this.toPersist.unitId = value;
        this.search.unitId = value;
        this.getWorkplace();
    };
    UserManagementComponent.prototype.saveEmployee = function () {
        // call save service function here
        console.log("Employee to save: ", this.toPersist);
    };
    UserManagementComponent = __decorate([
        core_1.Component({
            selector: 'user-management',
            templateUrl: '../view/user-management.component.html'
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService, shared_data_service_1.SharedDataService])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;
var EmployeeToPersist = /** @class */ (function () {
    function EmployeeToPersist() {
    }
    return EmployeeToPersist;
}());
exports.EmployeeToPersist = EmployeeToPersist;
//# sourceMappingURL=user-management.component.js.map