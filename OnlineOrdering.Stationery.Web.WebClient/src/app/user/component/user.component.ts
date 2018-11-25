import { Component, OnInit, Output, Input } from '@angular/core';
import { Http } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from 'app/user/service/user.service';
import { Observable } from 'rxjs/Observable';
import { ITeamMember, IUserSummary, User, IMember, UpdateUser } from '../model/user';


//declare var $: any;

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: '../view/user.component.html',
    providers: [UserService]
})

export class UserComponent implements OnInit{

    statusMessage: string = 'Loading data. Please wait...';
   
    @Output()
    userSummary: IUserSummary = new IUserSummary();

    @Output()
    teamMembers: IMember[] = [];

    @Output() 
    userProfile: User = new User();

    constructor(private _userService: UserService) { }

    public LoadProfile(): void {
        this._userService.getUser().subscribe((profile) => {
            this.userProfile = profile;
            this.teamMembers = this.userProfile.membersList;
            this.userSummary.email = profile.email;
            this.userSummary.totalCosts = profile.totalCosts;
            this.userSummary.totalOrders = profile.createdOrders;
            this.userSummary.totalProducts = profile.orderedProducts;
            this.userSummary.userName = profile.userName;
            this.userSummary.img = profile.imgName;
        });
    }

    ngOnInit() {
        this.LoadProfile();
    }

    public GetUpdatedProfile(user: UpdateUser): void {
        console.log('Updated Profile: ', user);
        this._userService.updateUser(user)
            .subscribe(profile => {
                this._userService.getUser();
            });
    }
}
