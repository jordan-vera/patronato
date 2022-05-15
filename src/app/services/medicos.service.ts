import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Medico } from 'app/models/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'medicos');
  }

  contador(): Observable<any> {
    return this._http.get(this.url + 'medicoscontador');
  }

  getone(id: number): Observable<any> {
    return this._http.get(this.url + 'medicos-one/' + id);
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'medicosdelete/' + id);
  }

  create(data: Medico): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'medicos', params, { headers: headers });
  }

  update(data: Medico): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'medicosupdate', params, { headers: headers });
  }

}
