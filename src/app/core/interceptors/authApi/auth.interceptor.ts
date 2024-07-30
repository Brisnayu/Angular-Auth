import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionStorageService } from '../../services/sessionStorage/session-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenSession = inject(SessionStorageService);
  const token = tokenSession.getItem('token'); 

  console.log("Desde el auth", token)

  if (token) {
    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(request)
  } else  {
    console.log('Token not found')
  }

  return next(req);
};