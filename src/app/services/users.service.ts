import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/userList-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // API
  private apiUrl = `${environment.API_URL}/users`;

  // Headers
  private headers = new HttpHeaders({
    "Content-Type": "application/json;charset=UTF-8",
  });

  /**
   * 
   * @title CONSTRUCTOR
   */
  constructor(private http: HttpClient) { }

  /**
   * 
   * @title GET USERS
   * @returns <Users>
   * @desc
   */
  getUsers(/*page: number, per_page: number*/): Observable<Users> {
    return this.http.get<Users>(this.apiUrl);
  }


  /**
   * 
   * @title GET USERS
   * @returns <Users>
   * @desc
   */
  showUsers(page: number, per_page: number): Observable<Users> {
    let params: HttpParams = new HttpParams();
    params = params
      .set('page', page.toString())
      .set('per_page', per_page.toString());

    return this.http.get<Users>(this.apiUrl, { params: params });
  }

}
