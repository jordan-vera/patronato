import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getallGeneros(): Observable<any> {
    return this._http.get(this.url + 'generos');
  }
}
