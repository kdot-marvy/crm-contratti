import { Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { TableComponent } from './components/table/table.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { ElencoManagerComponent } from './components/elenco-manager/elenco-manager.component';
import { NewManagerComponent } from './components/elenco-manager/new-manager/new-manager.component';
import { ElencoContractComponent } from './components/elenco-contracts/elenco-contract.component';
import { NewContractComponent } from './components/elenco-contracts/new-contract/new-contract.component';
import { ElencoDocumentComponent } from './components/elenco-document/elenco-document.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const AdminRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {
      path: 'gestori', component: ElencoManagerComponent
    },
    {
      path: 'contratti', component: ElencoContractComponent
    },
    {path: 'nuovo-gestore', component: NewManagerComponent},
    {path: 'nuovo-contratto', component: NewContractComponent},
    {path: 'documenti', component: ElencoDocumentComponent},
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
