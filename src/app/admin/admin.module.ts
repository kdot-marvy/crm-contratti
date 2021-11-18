import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutes } from './admin.routing';

import { ElencoUserComponent } from './components/elenco-user/elenco-user.component';
import { TableComponent } from './components/table/table.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElencoManagerComponent } from './components/elenco-manager/elenco-manager.component';
import { NewManagerComponent } from './components/elenco-manager/new-manager/new-manager.component';
import { ElencoContractComponent } from './components/elenco-contracts/elenco-contract.component';
import { NewContractComponent } from './components/elenco-contracts/new-contract/new-contract.component';
import { ElencoDocumentComponent } from './components/elenco-document/elenco-document.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NewUserComponent } from './components/elenco-user/new-user/new-user.component';
import { ToastComponent } from './components/toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FiscalCodeValidatorDirective } from './directives/fiscalCodeValidator';
import { DateValidatorDirective } from './directives/dateValidator';
import { EmailValidatorDirective } from './directives/emailValidator';
import { NumberValidatorDirective } from './directives/numberValidator';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }), // ToastrModule added
    ModalModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    ElencoUserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ElencoManagerComponent,
    NewManagerComponent,
    ElencoContractComponent,
    NewContractComponent,
    ElencoDocumentComponent,
    NewUserComponent,
    PaginationComponent,
    MapsComponent,
    ToastComponent,
    DateValidatorDirective,
    FiscalCodeValidatorDirective,
    EmailValidatorDirective,
    NumberValidatorDirective
  ]
})

export class AdminModule {}
