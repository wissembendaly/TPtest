import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenPayloadDto } from 'app/dto/auth/token-payload.dto';
import { AuthenticationService } from 'app/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()){
      this.router.navigate(['/home']);
      return false;
    }
    const tokenPayload: TokenPayloadDto = this.authService.getTokenPayload();
    if(!(tokenPayload.role === 'user')) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
  
}
