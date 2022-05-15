import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Paciente } from 'app/models/Pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'pacientes');
  }

  contador(): Observable<any> {
    return this._http.get(this.url + 'pacientescontador');
  }

  getone(id: number): Observable<any> {
    return this._http.get(this.url + 'paciente-one/' + id);
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'pacientedelete/' + id);
  }

  create(data: Paciente): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'paciente', params, { headers: headers });
  }

  update(data: Paciente): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'pacienteupdate', params, { headers: headers });
  }

}
