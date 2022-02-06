import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full',
  }, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {
    path: "",
    loadChildren: () => import("../app/pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "login",
    loadChildren: () => import("../app/pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "consultar-historia",
    loadChildren: () => import("../app/pages/consultar-historia/consultar-historia.module").then(m => m.ConsultarHistoriaModule)
  },
]
