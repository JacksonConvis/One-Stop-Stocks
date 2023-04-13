import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Stock } from './Stock';
import { Favorite } from './favorite';

@Injectable({
  providedIn: 'root'
})
export class StockAPIService {
  [x: string]: any;
  Url: string = "http://localhost:8080";
  // ^ this points to spring boot api backend
  stockURL: string = this.Url + "/stocks";
  faveURL: string = this.Url + "/favorites";

  constructor(private http: HttpClient) {}

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.stockURL}`);
  };

  addFavorite(newFave: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.faveURL}`, newFave);
  };

  getAllFave(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.faveURL}`);
  };

  removeFave(id: number): Observable<void> {
    return this.http.delete<void>(`${this.faveURL}/${id}`);
  };

}
