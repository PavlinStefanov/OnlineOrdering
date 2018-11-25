import { Component, OnInit, Input } from '@angular/core';
import { ITeamMember, IMember } from '../model/user';

@Component({
    selector: 'team-members',
    templateUrl:'../view/team-members.component.html'
})
export class TeamMembersComponent {

    @Input() teamMembers;
    _teamMembers: IMember[];

    constructor() { }

    ngOnInit() { }

    ngOnChanges() {
        this._teamMembers = this.teamMembers;
    }
}