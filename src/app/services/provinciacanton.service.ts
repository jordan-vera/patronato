import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class ProvinciaCantonService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getallProvincias(): Observable<any> {
    return this._http.get(this.url + 'provincias');
  }

  getallCantones(idprovincia: number): Observable<any> {
    return this._http.get(this.url + 'cantones/'+idprovincia);
  }

}
