import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, UpdateUser } from '../model/user';
import { UserService } from '../service/user.service';
import { SharedDataService } from '../../shared/service/shared-data.service';
import { ValueObjects } from '../../shared/model/shared-model';

declare var $: any;
@Component({
    selector: 'edit-profile',
    templateUrl: '../view/edit-profile.component.html',
    providers: [SharedDataService]
})
export class EditProfileComponent {

    @Output() onProfileUpdated: EventEmitter<any> = new EventEmitter<any>();
    @Input() userProfile: User = new User();
    updateUser: UpdateUser = new UpdateUser();
    valueObject: ValueObjects = new ValueObjects();

    constructor(private _sharedService: SharedDataService) { }

    ngOnChanges() {
    }

    loadSharedData() {
        this._sharedService.getValueObjects()
            .subscribe(valueObject => { this.valueObject = valueObject });
    }

    ngOnInit() {
        this.loadSharedData();
    }


    SelectedJobTitle(value: any): void {
        this.updateUser.jobId = value;
    }
    SelectedUnitName(value: any): void {
        this.updateUser.unitId = value;
    }

    updateUserProfile(): void {
        this.showNotification('top', 'center', 2)

        this.updateUser.firstName = this.userProfile.firstName;
        this.updateUser.lastName = this.userProfile.lastName;
        this.updateUser.userName = this.userProfile.userName;
       
        this.onProfileUpdated.emit(this.updateUser);
    }

    showNotification(from, align, messageId) {
        var type = ['', 'info', 'success', 'warning', 'danger'];

        var color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "ti-user",
            message: "User <b>" + this.userProfile.firstName.concat(" ", this.userProfile.lastName) + "</b> has been updated successfully."
        }, {
                type: type[messageId],
                timer: 500,
                placement: {
                    from: from,
                    align: align
                }
            });
    }
}