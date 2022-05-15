import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Usuario } from 'app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'usuarios');
  }

  login(user: string, clave: string): Observable<any> {
    return this._http.get(this.url + 'login/' + user + '/' + clave);
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'usuario-delete/' + id);
  }

  create(data: Usuario): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'usuario', params, { headers: headers });
  }

  update(data: Usuario): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'usuario-update', params, { headers: headers });
  }

}
