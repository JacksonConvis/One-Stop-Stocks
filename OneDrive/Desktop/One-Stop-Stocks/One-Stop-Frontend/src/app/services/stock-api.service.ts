import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Stock } from '../interfaces/Stock';
import { Favorite } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class StockAPIService {
  [x: string]: any;
  Url: string = "http://localhost:8080";
  // ^ this points to spring boot api backend
  stockURL: string = this.Url + "/stocks";
  faveURL: string = this.Url + "/favorites";
  yesterdayURL: string = this.Url +"/stocks/yesterday";
  lastWeekURL: string = this.Url +"/stocks/lastweek";

  constructor(private http: HttpClient) {}

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.stockURL}`);
  };

  getYesterday(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.yesterdayURL}`);
  };

  getLastWeek(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.lastWeekURL}`);
  }


  addFavorite(newFave: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.faveURL}`, newFave);
  };

  getAllFave(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.faveURL}`);
  };

  removeFave(ticker: string): Observable<void> {
    return this.http.delete<void>(`${this.faveURL}/${ticker}`);
  };

}
