import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environmentDevelop } from '../../../../environments/environments.develop';
import { login } from '../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiAuth = `${environmentDevelop.urlApi}login/authenticate`
  private http = inject(HttpClient)

  verifyUser(username: string, password: string): Observable<string> {
    const body: login = {
      username: username,
      password: password
    }

    return this.http.post<string>(this.apiAuth, body).pipe(map(response => response));
  }
}
