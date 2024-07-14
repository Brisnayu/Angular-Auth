import { inject, Injectable } from '@angular/core';
import { environmentDevelop } from '../../../../environments/environments.develop';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

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

  private getWithAuth(url: string, token: string | null) {
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.get(url, { headers }).pipe(map(response => response));
  }

  getAdmins(token: string | null) {
    return this.getWithAuth(this.endpoints.admins, token);
  }

  getAdminById(token: string | null, id: string) {
    return this.getWithAuth(`${this.endpoints.admins}/${id}`, token);
  }

  getLoginEchoping(token: string | null) {
    return this.getWithAuth(this.endpoints.loginEchoping, token);
  }

  getLoginEchoUser(token: string | null) {
    return this.getWithAuth(this.endpoints.loginEchoUser, token);
  }

  getCustomers(token: string | null) {
    return this.getWithAuth(this.endpoints.customers, token);
  }

  getCustomersById(token: string | null, id: string) {
    return this.getWithAuth(`${this.endpoints.customers}/${id}`, token);
  }
}
