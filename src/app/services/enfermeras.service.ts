import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Enfermera } from 'app/models/Enfermera';

@Injectable({
  providedIn: 'root'
})
export class EnfermerasService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'enfermeras');
  }

  contador(): Observable<any> {
    return this._http.get(this.url + 'enfermerascontador');
  }

  getone(id: number): Observable<any> {
    return this._http.get(this.url + 'enfermeras-one/' + id);
  }

  delete(id): Observable<any> {
    return this._http.get(this.url + 'enfermerasdelete/' + id);
  }

  create(data: Enfermera): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'enfermeras', params, { headers: headers });
  }

  update(data: Enfermera): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this._http.post(this.url + 'enfermerasupdate', params, { headers: headers });
  }

}
