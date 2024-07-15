import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../../services/sessionStorage/session-storage.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const sessionStorage = inject(SessionStorageService);

  if (sessionStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
