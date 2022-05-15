import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Especialidadmedica } from 'app/models/Especialidadmedica';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadmedicaService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'especialidadmedica');
  }

  getone(id: number): Observable<any> {
    return this._http.get(this.url + 'especialidadmedica-one/' + id);
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'especialidadmedica-delete/' + id);
  }

  create(data: Especialidadmedica): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'especialidadmedica', params, { headers: headers });
  }

  update(data: Especialidadmedica): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'especialidadmedica-update', params, { headers: headers });
  }

}
