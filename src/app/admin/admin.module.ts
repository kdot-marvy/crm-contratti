import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutes } from './admin.routing';

import { UserComponent } from './components/user/user.component';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
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
  ]
})

export class AdminModule {}
