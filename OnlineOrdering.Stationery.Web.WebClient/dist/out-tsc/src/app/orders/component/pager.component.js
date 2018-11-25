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
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.onSelectedPage = new core_1.EventEmitter();
        this.pageNumber = 0;
        this.selectedIndex = 1;
        this.active = 'btn active';
        this.notActive = 'btn';
        this.start = 1;
        this.end = 5;
        this.isActive = 1;
    }
    PagerComponent.prototype.ngOnChanges = function () {
        console.log('Emplty List: ', this.isEmpltyList);
    };
    PagerComponent.prototype.ngOnInit = function () {
    };
    PagerComponent.prototype.getFirst = function () {
        this.start = 1;
        this.end = 5;
        this.pageNumber = 0;
        this.selectedIndex = 1;
        this.isActive = 1;
        this.onSelectedPage.emit(this.pageNumber);
    };
    PagerComponent.prototype.getPageNumber = function (page) {
        this.pageNumber = page;
        this.selectedIndex = page;
        this.isActive = this.selectedIndex;
        this.onSelectedPage.emit(this.pageNumber);
    };
    PagerComponent.prototype.getPrevious = function () {
        if (this.selectedIndex === 1) {
            this.isActive = 1;
        }
        this.start -= 1;
        this.end -= 1;
        this.selectedIndex -= 1;
        this.isActive = this.selectedIndex;
        this.pageNumber -= 1;
        this.onSelectedPage.emit(this.pageNumber);
    };
    PagerComponent.prototype.getCurrentFour = function () {
        return this.range(this.start, this.end, 1);
    };
    PagerComponent.prototype.getNext = function () {
        this.start += 1;
        this.end += 1;
        this.selectedIndex += 1;
        this.isActive = this.selectedIndex;
        this.pageNumber += 1;
        this.onSelectedPage.emit(this.pageNumber);
    };
    PagerComponent.prototype.range = function (start, edge, step) {
        // If only one number was passed in make it the edge and 0 the start.
        if (arguments.length == 1) {
            edge = start;
            start = 0;
        }
        // Validate the edge and step numbers.
        edge = edge || 0;
        step = step || 1;
        // Create the array of numbers, stopping befor the edge.
        for (var ret = []; (edge - start) * step > 0; start += step) {
            ret.push(start);
        }
        return ret;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PagerComponent.prototype, "isEmpltyList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PagerComponent.prototype, "onSelectedPage", void 0);
    PagerComponent = __decorate([
        core_1.Component({
            selector: 'pager',
            templateUrl: '../view/pager.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;
//# sourceMappingURL=pager.component.js.map