"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var primeng_1 = require("primeng/primeng");
var modal_1 = require("ngx-bootstrap/modal");
var bs_modal_ref_service_1 = require("ngx-bootstrap/modal/bs-modal-ref.service");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var ngx_ui_switch_1 = require("ngx-ui-switch");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var sidebar_module_1 = require("./sidebar/sidebar.module");
var footer_module_1 = require("./shared/footer/footer.module");
var navbar_module_1 = require("./shared/navbar/navbar.module");
var fixedplugin_module_1 = require("./shared/fixedplugin/fixedplugin.module");
var map_1 = require("@ngui/map");
var component_loader_1 = require("ngx-bootstrap/component-loader");
var positioning_1 = require("ngx-bootstrap/positioning");
var modal_2 = require("ngx-bootstrap/modal");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var user_component_1 = require("./user/component/user.component");
var user_summary_component_1 = require("./user/component/user-summary.component");
var order_summary_component_1 = require("./orders/component/order-summary.component");
var order_basket_tab_component_1 = require("./orders/component/order-basket-tab.component");
var order_history_tab_component_1 = require("./orders/component/order-history-tab.component");
var product_search_component_1 = require("./orders/component/product-search.component");
var product_list_tab_component_1 = require("./orders/component/product-list-tab.component");
var team_members_component_1 = require("./user/component/team-members.component");
var edit_profile_component_1 = require("./user/component/edit-profile.component");
var order_component_1 = require("./orders/component/order.component");
var management_component_1 = require("./management/component/management.component");
var order_notification_component_1 = require("./management/component/order-notification.component");
var order_created_component_1 = require("./management/component/order-created.component");
var products_by_order_component_1 = require("./management/component/products-by-order.component");
var order_linking_component_1 = require("./management/component/order-linking.component");
var order_ending_component_1 = require("./management/component/order-ending.component");
var admin_component_1 = require("./admin/component/admin.component");
var user_management_component_1 = require("./admin/component/user-management.component");
var product_management_component_1 = require("./admin/component/product-management.component");
var order_finalisation_component_1 = require("./admin/component/order-finalisation.component");
var order_out_of_the_box_component_1 = require("./admin/component/order-out-of-the-box.component");
var order_sending_component_1 = require("./admin/component/order-sending.component");
var maps_component_1 = require("./maps/maps.component");
var upgrade_component_1 = require("./upgrade/upgrade.component");
var user_service_1 = require("app/user/service/user.service");
var order_service_component_1 = require("./orders/service/order-service.component");
var shared_data_service_1 = require("./shared/service/shared-data.service");
var management_service_1 = require("./management/service/management.service");
var pager_component_1 = require("./orders/component/pager.component");
var car_service_1 = require("./dashboard/car-service");
var http_2 = require("@angular/common/http");
//test
var test_comonent_1 = require("./test/component/test.comonent");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                http_2.HttpClientModule,
                primeng_1.DataTableModule, primeng_1.DropdownModule, primeng_1.DataListModule,
                ngx_ui_switch_1.UiSwitchModule,
                datepicker_1.BsDatepickerModule.forRoot(),
                modal_2.ModalModule,
                router_1.RouterModule.forRoot(app_routing_1.AppRoutes),
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                fixedplugin_module_1.FixedPluginModule,
                map_1.NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                user_component_1.UserComponent, team_members_component_1.TeamMembersComponent, user_summary_component_1.UserSummaryComponent, edit_profile_component_1.EditProfileComponent,
                order_component_1.OrderComponent, order_summary_component_1.OrderSummaryComponent, product_search_component_1.ProductSearchComponent, product_list_tab_component_1.ProductListComponent, order_basket_tab_component_1.OrderBasketComponent, order_history_tab_component_1.OrderHistory,
                management_component_1.ManagementComponent, order_notification_component_1.OrderNotoficationComponent, order_created_component_1.OrderCreatedComponent, products_by_order_component_1.ProductsByOrderComponent, order_linking_component_1.OrderLinkingComponent, order_ending_component_1.OrderEndingComponent,
                admin_component_1.AdminComponent, user_management_component_1.UserManagementComponent, product_management_component_1.ProductManagementComponent, order_finalisation_component_1.OrderFinalisationComponent, order_out_of_the_box_component_1.OrdersOutOfTheBoxComponent, order_sending_component_1.OrderSendingComponent,
                test_comonent_1.TestComponent,
                maps_component_1.MapsComponent,
                upgrade_component_1.UpgradeComponent,
                pager_component_1.PagerComponent
            ],
            providers: [user_service_1.UserService, car_service_1.CarService, order_service_component_1.OrderService, management_service_1.ManagementService, shared_data_service_1.SharedDataService, modal_1.BsModalService, bs_modal_ref_service_1.BsModalRef, component_loader_1.ComponentLoaderFactory, positioning_1.PositioningService, datepicker_1.BsDatepickerConfig, datepicker_1.BsLocaleService, datepicker_1.BsDaterangepickerConfig],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map