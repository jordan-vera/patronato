import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Visita } from 'app/models/Visita';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'visitas');
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'visitas-delete/' + id);
  }

  create(data: Visita): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'visitas', params, { headers: headers });
  }

}
