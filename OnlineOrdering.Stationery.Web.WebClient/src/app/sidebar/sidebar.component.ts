import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Summary',  icon: 'ti-panel', class: '' },
    { path: 'orders', title: 'Orders', icon: 'ti-world', class: '' },
    { path: 'management', title: 'Management', icon: 'ti-package', class: '' },
    { path: 'admin', title: 'Admin', icon: 'ti-star', class: '' },
    { path: 'test', title: 'Test', icon: 'ti-star', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'maps', title: 'Units Location',  icon:'ti-map', class: '' },
    //{ path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
