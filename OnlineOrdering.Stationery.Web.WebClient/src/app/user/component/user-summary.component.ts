import { OnInit, Component, Output, Input } from '@angular/core';
import { IUserSummary } from '../model/user';

@Component({
    selector: 'user-summary',
    templateUrl: '../view/user-summary.component.html'
})
export class UserSummaryComponent {

    @Input() userSummary;
    _userSummary: IUserSummary;

    constructor() { }

    ngOnInit() {
        this._userSummary = this.userSummary;
    }
}