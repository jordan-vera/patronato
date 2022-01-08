import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Home', icon: 'nc-bank', class: '' },
    { path: '/admin/paciente', title: 'Pacientes', icon: 'nc-circle-10', class: '' },
    { path: '/admin/medico', title: 'Médicos', icon: 'nc-single-02', class: '' },
    { path: '/admin/historias', title: 'Historias', icon: 'nc-badge', class: '' },
    { path: '/admin/informes', title: 'Reportes', icon: 'nc-paper', class: '' },
    { path: '/admin/mis-datos', title: 'Mis datos', icon: 'nc-tile-56', class: '' },
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
