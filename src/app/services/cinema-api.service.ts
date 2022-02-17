import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFilm } from '../models/ifilm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaAPIService {
  private _url : string = 'http://localhost:26450/api/Film';

    private optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private _http: HttpClient) { }

  public GetAll() : Observable<IFilm[]>{
    return this._http.get<IFilm[]>(this._url);
  }

  public GetOne(id: number):Observable<IFilm>{
    return this._http.get<IFilm>(`${this._url}/${id}`);
  }

  public Post(content : IFilm):Observable<any>{
    return this._http.post(this._url, content, this.optionRequete);
  }
}
