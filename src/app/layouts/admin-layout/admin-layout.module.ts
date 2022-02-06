import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';

import { MedicosComponent }         from '../../pages/medicos/medicos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PacientesComponent } from 'app/pages/pacientes/pacientes.component';
import { HistoriasComponent } from 'app/pages/historias/historias.component';
import { InformesComponent } from 'app/pages/informes/informes.component';
import { MisDatosComponent } from 'app/pages/mis-datos/mis-datos.component';
import { PacienteService } from 'app/services/zonas.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    DashboardComponent,
    MedicosComponent,
    PacientesComponent,
    HistoriasComponent,
    InformesComponent,
    MisDatosComponent
  ],

})

export class AdminLayoutModule {}
