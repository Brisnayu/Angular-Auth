import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionStorageService } from '../../services/sessionStorage/session-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenSession = inject(SessionStorageService);
  const token = tokenSession.getItem('token'); 

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
