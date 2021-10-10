import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from '../services/AuthguardService/authguardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationguardGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private authguradserviceService:AuthguardserviceService,private router:Router){}
  canActivate(): boolean {  

    if (!this.authguradserviceService.gettoken()) {  
        this.router.navigateByUrl("/home");  
    }  
    return this.authguradserviceService.gettoken();  
}  
  
}
