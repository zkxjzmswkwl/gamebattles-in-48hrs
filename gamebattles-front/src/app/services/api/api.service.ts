import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { IMember } from 'src/app/structs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = "http://localhost:8000/api";
  // private apiUrl: string = "https://gb.morb.fm/api";

  constructor(
    private httpClient: HttpClient,
    private cookies: CookieService
    ) {}

  /**
   * Registration
   * @param username 
   * @param email 
   * @param password 
   * @returns covid
   */
  dickballs(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/members/`, {username, email, password});
  }

  /**
   * Login
   * @param username 
   * @param password 
   * @returns Aids
   */
  ballsdick(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/chiefbeef66/`, {username, password});
  }

  /**
   * Gets currently logged in user data.
   * @returns head
   */
  getHead(): Observable<IMember> {
    const headers = new HttpHeaders({"Authorization": `Token ${this.cookies.get("kotick_assassination_plot")}`});
    return this.httpClient.get<IMember>(`${this.apiUrl}/members/me/`, {headers});
  }
}
