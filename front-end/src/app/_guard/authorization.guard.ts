import { CanActivateFn } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  
  return AuthorizationService.getLoginStatus();
};
