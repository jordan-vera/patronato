import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Historialsesion } from 'app/models/Historialsesion';

@Injectable({
  providedIn: 'root'
})
export class HistorialsesionService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'historialsesion');
  }

  contador(): Observable<any> {
    return this._http.get(this.url + 'historialsesion-contador');
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'historialsesion-delete/' + id);
  }

  create(data: Historialsesion): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'historialsesion', params, { headers: headers });
  }

}
