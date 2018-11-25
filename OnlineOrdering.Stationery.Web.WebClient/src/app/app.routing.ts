import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/component/user.component';
import { OrderComponent } from './orders/component/order.component';
import { ManagementComponent } from './management/component/management.component';
import { AdminComponent } from './admin/component/admin.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

import { TestComponent } from './test/component/test.comonent';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'orders',
        component: OrderComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
