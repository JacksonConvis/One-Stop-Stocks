import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Stock } from '../interfaces/Stock';
import { Favorite } from '../interfaces/favorite';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  Url: string = "http://localhost:8080";
  // ^ this points to spring boot api backend
  loginURL: string = this.Url + "/login";
  userURL: string = this.Url + "/users";


  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userURL}`);
  };

  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.loginURL}`, user);
  };

  removeUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.userURL}/${user}`);
  };
  

}