import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule, DropdownModule, DataListModule } from 'primeng/primeng';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerModule, BsDatepickerConfig, BsLocaleService, BsDaterangepickerConfig} from 'ngx-bootstrap/datepicker';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/component/user.component';
import { UserSummaryComponent } from './user/component/user-summary.component';
import { OrderSummaryComponent } from './orders/component/order-summary.component';
import { OrderBasketComponent } from './orders/component/order-basket-tab.component';
import { OrderHistory } from './orders/component/order-history-tab.component';
import { ProductSearchComponent } from './orders/component/product-search.component';
import { ProductListComponent } from './orders/component/product-list-tab.component';
import { TeamMembersComponent } from './user/component/team-members.component';
import { EditProfileComponent } from './user/component/edit-profile.component';
import { OrderComponent } from './orders/component/order.component';
import { ManagementComponent } from './management/component/management.component';
import { OrderNotoficationComponent } from './management/component/order-notification.component';
import { OrderCreatedComponent } from './management/component/order-created.component';
import { ProductsByOrderComponent } from './management/component/products-by-order.component';
import { OrderLinkingComponent } from './management/component/order-linking.component';
import { OrderEndingComponent } from './management/component/order-ending.component';
import { AdminComponent } from './admin/component/admin.component';
import { UserManagementComponent } from './admin/component/user-management.component';
import { ProductManagementComponent } from './admin/component/product-management.component';
import { OrderFinalisationComponent } from './admin/component/order-finalisation.component';
import { OrdersOutOfTheBoxComponent } from './admin/component/order-out-of-the-box.component';
import { OrderSendingComponent } from './admin/component/order-sending.component';
import { MapsComponent }   from './maps/maps.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { UserService } from 'app/user/service/user.service';
import { OrderService } from './orders/service/order-service.component';
import { SharedDataService } from './shared/service/shared-data.service';
import { ManagementService } from './management/service/management.service';
import { PagerComponent } from './orders/component/pager.component';
import { CarService } from './dashboard/car-service';
import { HttpClientModule } from '@angular/common/http';

//test
import { TestComponent } from './test/component/test.comonent';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        BrowserModule,
        HttpClientModule,
        DataTableModule, DropdownModule, DataListModule,
        UiSwitchModule,
        BsDatepickerModule.forRoot(),
        ModalModule,
        RouterModule.forRoot(AppRoutes),
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        UserComponent, TeamMembersComponent, UserSummaryComponent, EditProfileComponent,
        OrderComponent, OrderSummaryComponent, ProductSearchComponent, ProductListComponent, OrderBasketComponent, OrderHistory,
        ManagementComponent, OrderNotoficationComponent, OrderCreatedComponent, ProductsByOrderComponent, OrderLinkingComponent, OrderEndingComponent,
        AdminComponent, UserManagementComponent, ProductManagementComponent, OrderFinalisationComponent, OrdersOutOfTheBoxComponent, OrderSendingComponent,
        TestComponent,
        MapsComponent,
        UpgradeComponent,
        PagerComponent
  ],

    providers: [UserService, CarService,OrderService, ManagementService, SharedDataService, BsModalService, BsModalRef, ComponentLoaderFactory, PositioningService, BsDatepickerConfig, BsLocaleService, BsDaterangepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
