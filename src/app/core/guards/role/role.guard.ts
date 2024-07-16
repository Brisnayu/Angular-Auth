import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Ijwt } from '../../models/jwt.model';
import { SessionStorageService } from '../../services/sessionStorage/session-storage.service';
import { UserRole } from '../../models/enums/user-role.enum';


export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionToken = inject(SessionStorageService);

  const token = sessionToken.getItem('token');

  if (token) {
    try {
      const decodedToken = jwtDecode<Ijwt>(token);
      const userrole = decodedToken.role as UserRole;

      const expectedrole = route.data['role'] as UserRole[];
      // console.log(expectedrole)
      // console.log(userrole)

      if (expectedrole.some((role: string) => userrole.includes(role))) {
        return true;
      } else {
        alert('No tienes permiso')
        router.navigate(['/home']);
        return false;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      router.navigate(['/home']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }

};
