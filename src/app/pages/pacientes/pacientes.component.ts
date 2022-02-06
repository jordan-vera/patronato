import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/pacientes';
import { PacienteService } from 'app/services/zonas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  public pacienteCreate: Paciente = new Paciente(0, '', '', '', '', '', '');
  public pacienteOne: Paciente = new Paciente(0, '', '', '', '', '', '');
  public pacientes: Paciente[];
  public busquedatxt: string = '';

  constructor(
    private _pacienteService: PacienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  one(idpaciente, cedula, nombres, direccion, celular, telefono, email) {
    this.pacienteOne = new Paciente(idpaciente, cedula, nombres, direccion, celular, telefono, email)
  }

  delete(id): void {
    this._pacienteService.delete(id).subscribe(
      response => {
        this.getPacientes();
        this.toastr.success('Registro eliminado', 'Hecho');
      }, error => {
        console.log(error);
      }
    )
  }


  guardarPaciente(): void {
    this._pacienteService.create(this.pacienteCreate).subscribe(
      response => {
        this.toastr.success('Registro agregado', 'Hecho');
        this.getPacientes();
      }, error => {
        console.log(error);
      }
    )
  }

  getPacientes(): void {
    this._pacienteService.getall().subscribe(
      response => {
        this.pacientes = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
