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
var TeamMembersComponent = /** @class */ (function () {
    function TeamMembersComponent() {
    }
    TeamMembersComponent.prototype.ngOnInit = function () { };
    TeamMembersComponent.prototype.ngOnChanges = function () {
        this._teamMembers = this.teamMembers;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TeamMembersComponent.prototype, "teamMembers", void 0);
    TeamMembersComponent = __decorate([
        core_1.Component({
            selector: 'team-members',
            templateUrl: '../view/team-members.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], TeamMembersComponent);
    return TeamMembersComponent;
}());
exports.TeamMembersComponent = TeamMembersComponent;
//# sourceMappingURL=team-members.component.js.map