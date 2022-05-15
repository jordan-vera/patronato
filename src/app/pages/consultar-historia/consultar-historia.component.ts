import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/Pacientes';

@Component({
  selector: 'app-consultar-historia',
  templateUrl: './consultar-historia.component.html',
  styleUrls: ['./consultar-historia.component.css']
})
export class ConsultarHistoriaComponent implements OnInit {

  public paciente: Paciente = new Paciente(1, '1209384837', 'Manuel RIvera', 'Ecuador - Los Ríos - Quevedo', '0974637473', '23945');
  public estado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.estado = true;
  }

}
