import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate{
  constructor(private authorizationService: AuthorizationService){}

  canActivate() {
    if(this.authorizationService.isAuthenticated()){
      return true;
    } else {
      this.authorizationService.login();
    }
  }


}