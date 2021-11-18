import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/gestori',     title: 'Gestori',         icon:'nc-circle-10',       class: '' },
    { path: '/contratti',     title: 'Contratti',         icon:'nc-paper',       class: '' },
    { path: '/documenti',     title: 'Documenti',         icon:'nc-single-copy-04',       class: '' },
     { path: '/utenti',         title: 'Utenti',             icon:'nc-single-02',    class: '' },
     { path: '/upgrade',       title: 'Versione 0.0.0',    icon:'nc-spaceship',  class: 'active-pro' },
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
}
