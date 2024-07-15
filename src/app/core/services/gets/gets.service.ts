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

  private getWithAuth<T>(url: string) {
    return this.http.get<T>(url).pipe(map(response => response));
  }

  getAdmins(): Observable<string[]> {
    return this.getWithAuth(this.endpoints.admins);
  }

  getAdminById(id: string): Observable<string> {
    return this.getWithAuth<string>(`${this.endpoints.admins}/${id}`);
  }

  getLoginEchoping(): Observable<any> {
    return this.getWithAuth(this.endpoints.loginEchoping);
  }

  getLoginEchoUser(): Observable<any> {
    return this.getWithAuth(this.endpoints.loginEchoUser);
  }

  getCustomers(): Observable<string[]> {
    return this.getWithAuth(this.endpoints.customers);
  }

  getCustomersById(id: string): Observable<string> {
    return this.getWithAuth(`${this.endpoints.customers}/${id}`);
  }
}
