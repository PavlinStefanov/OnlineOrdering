"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/dashboard.component");
var user_component_1 = require("./user/component/user.component");
var order_component_1 = require("./orders/component/order.component");
var management_component_1 = require("./management/component/management.component");
var admin_component_1 = require("./admin/component/admin.component");
var maps_component_1 = require("./maps/maps.component");
var upgrade_component_1 = require("./upgrade/upgrade.component");
var test_comonent_1 = require("./test/component/test.comonent");
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'orders',
        component: order_component_1.OrderComponent
    },
    {
        path: 'management',
        component: management_component_1.ManagementComponent
    },
    {
        path: 'test',
        component: test_comonent_1.TestComponent
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent
    },
    {
        path: 'maps',
        component: maps_component_1.MapsComponent
    },
    {
        path: 'upgrade',
        component: upgrade_component_1.UpgradeComponent
    }
];
//# sourceMappingURL=app.routing.js.map