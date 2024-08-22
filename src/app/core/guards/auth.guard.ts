import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated$.pipe(
    map((isAuthenticated:any) => {
      if (isAuthenticated) {
        return true; 
      } else {
        return false; 
      }
    }),
    catchError(() => {
      return of(false);
    })
  );
};
