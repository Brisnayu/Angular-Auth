import { inject, Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environments.develop';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetsService {
  private http = inject(HttpClient);
  private apiUrl = environmentDevelop.urlApi;

  private endpoints = {
    admins: `${this.apiUrl}Admin`,
    loginEchoping: `${this.apiUrl}login/echoping`,
    loginEchoUser: `${this.apiUrl}login/echouser`,
    customers: `${this.apiUrl}Customers`
  };

  private getWithAuth<T>(url: string, token: string | null) {
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.get<T>(url, { headers }).pipe(map(response => response));
  }

  getAdmins(token: string | null): Observable<string[]> {
    return this.getWithAuth(this.endpoints.admins, token);
  }

  getAdminById(token: string | null, id: string): Observable<string> {
    return this.getWithAuth<string>(`${this.endpoints.admins}/${id}`, token);
  }

  getLoginEchoping(token: string | null) {
    return this.getWithAuth(this.endpoints.loginEchoping, token);
  }

  getLoginEchoUser(token: string | null) {
    return this.getWithAuth(this.endpoints.loginEchoUser, token);
  }

  getCustomers(token: string | null): Observable<string[]> {
    return this.getWithAuth(this.endpoints.customers, token);
  }

  getCustomersById(token: string | null, id: string) {
    return this.getWithAuth(`${this.endpoints.customers}/${id}`, token);
  }
}
