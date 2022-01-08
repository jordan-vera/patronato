import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PacientesComponent } from 'app/pages/pacientes/pacientes.component';
import { MedicosComponent } from 'app/pages/medicos/medicos.component';
import { HistoriasComponent } from 'app/pages/historias/historias.component';
import { InformesComponent } from 'app/pages/informes/informes.component';
import { MisDatosComponent } from 'app/pages/mis-datos/mis-datos.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'paciente',           component: PacientesComponent },
    { path: 'medico',          component: MedicosComponent },
    { path: 'historias',     component: HistoriasComponent },
    { path: 'informes',          component: InformesComponent },
    { path: 'mis-datos',           component: MisDatosComponent },
];
