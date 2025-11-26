import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const authServ = inject(AuthService);
    if (authServ.isConnected()) {
        return true;
    } else {
        console.log(route.url);
        router.navigate(['/auth/login', { returnUrl: route.url }]);
        return false;
    }
};