import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarHistoriaRoutingModule } from './consultar-historia-routing.module';
import { ConsultarHistoriaComponent } from './consultar-historia.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [ConsultarHistoriaComponent],
  imports: [
    CommonModule,
    ConsultarHistoriaRoutingModule,
    FormsModule,
    QRCodeModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ConsultarHistoriaModule { }
