import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PacienteService } from "./services/paciente.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ProvinciaCantonService } from "./services/provinciacanton.service";
import { GeneroService } from "./services/genero.service";
import { VisitaService } from "./services/visita.service";
import { UsuarioService } from "./services/usuarios.service";
import { PersonaService } from "./services/persona.service";
import { EspecialidadmedicaService } from "./services/especialidadmedica.service";
import { MedicosService } from "./services/medicos.service";
import { HistorialsesionService } from "./services/historialsesion.service";
import { EnfermerasService } from "./services/enfermeras.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    }),
    FooterModule,
    FixedPluginModule,
    HttpClientModule
  ],
  providers: [
    PacienteService,
    ProvinciaCantonService,
    GeneroService,
    VisitaService,
    UsuarioService,
    PersonaService,
    EspecialidadmedicaService,
    MedicosService,
    PacienteService,
    HistorialsesionService,
    EnfermerasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
